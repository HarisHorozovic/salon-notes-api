const { create, findOne } = require("../db");
const { encrypt, compareHash, base64Encode } = require("../utils");
exports.signup = async (req, res) => {
  try {
    const { email, password } = req.body;
    const hashed = await encrypt(password);

    const user = await create("app_users", "users", {
      email,
      password: hashed,
    });

    const token = base64Encode(`${user.insertedId}_${email}`);

    res.status(200).json({ message: "logged in", token });
  } catch (e) {
    return res
      .status(e.statusCode || 400)
      .json({ message: e.message || "Something went wrong" });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await findOne("app_users", "users", { email: email });

  if (!user) {
    return res
      .status(401)
      .json({ message: "Email or password are incorrect!" });
  }

  const isPasswordCorrect = await compareHash(password, user.password);

  if (!isPasswordCorrect) {
    return res
      .status(401)
      .json({ message: "Email or password are incorrect!" });
  }

  const token = base64Encode(`${user.id}_${user.email}`);
  res.status(200).json({ message: "logged in", token });
};
