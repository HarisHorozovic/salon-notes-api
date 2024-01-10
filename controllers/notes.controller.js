const { find, create } = require("../db");
exports.createNote = async (req, res) => {
  try {
    const { id } = req.user;
    const { body } = req;

    await create(id, "notes", body);
    return res.status(200).json({ message: "Note created" });
  } catch (e) {
    return res
      .status(e.statusCode || 400)
      .json({ message: e.message || "Something went wrong" });
  }
};
exports.getNotes = async (req, res) => {
  try {
    const { id } = req.user;
    const { page, perPage, search } = req.query;

    const regex = new RegExp(search, "i");
    const items = await find({
      db: id,
      collection: "notes",
      page,
      perPage,
      query: search ? { title: { $regex: regex } } : undefined,
    });

    return res.status(200).json({ items });
  } catch (e) {
    return res
      .status(e.statusCode || 400)
      .json({ message: e.message || "Something went wrong" });
  }
};
exports.getNote = (req, res) => {};
exports.updateNote = (req, res) => {};
exports.deleteNote = (req, res) => {};