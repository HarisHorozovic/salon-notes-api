const bcrypt = require("bcryptjs");
const encrypt = async (password) => {
  return new Promise((resolve, reject) => {
    bcrypt.genSalt(10, function (err, salt) {
      if (err) {
        reject(err);
      }
      bcrypt.hash(password, salt, function (err, hash) {
        if (err) {
          reject(err);
        }

        resolve(hash);
      });
    });
  });
};

const compareHash = async (password, hashedPassword) => {
  return new Promise((resolve) => {
    bcrypt.compare(password, hashedPassword, function (err, isMatch) {
      if (err) {
        resolve(false);
      }

      resolve(isMatch);
    });
  });
};

const base64Encode = (unencoded) => {
  return new Buffer.from(unencoded || "").toString("base64");
};

const base64Decode = (encoded) => {
  return new Buffer.from(encoded || "", "base64").toString("utf8");
};

module.exports = { encrypt, compareHash, base64Encode, base64Decode };
