const { find, create, db_delete, update } = require("../db");
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
exports.updateNote = async (req, res) => {
  try {
    const { id } = req.user;
    const { body } = req;
    const { _id, ...updateObject } = body;

    await update(
      id,
      "notes",
      { _id: _id },
      { $set: { ...updateObject, updated_at: new Date() } },
    );

    return res.status(200).json({ message: "Note updated successfully" });
  } catch (e) {
    return res
      .status(e.statusCode || 400)
      .json({ message: e.message || "Something went wrong" });
  }
};
exports.deleteNote = async (req, res) => {
  try {
    const { user } = req;
    const { id } = req.params;

    await db_delete(user.id, "notes", { _id: id });

    return res.status(200).json({ message: "Note deleted successfully" });
  } catch (error) {
    return res
      .status(error.statusCode || 400)
      .json({ message: error.message || "Something went wrong" });
  }
};
