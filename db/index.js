const { DATABASE_URL } = require("../config");
const mongodb = require("mongodb").MongoClient;

exports.create = async (db, collection, data) => {
  try {
    const connection = await mongodb.connect(DATABASE_URL);
    //   Do stuff
    return await connection
      .db(db)
      .collection(collection)
      .insertOne({ ...data, created_at: new Date(), updated_at: new Date() });
  } catch (e) {
    console.log(
      "____________________________________________________________________________________"
    );
    console.log("dberror", e);
    console.log(
      "____________________________________________________________________________________"
    );
  }
};

exports.findOne = async (db, collection, query) => {
  try {
    const connection = await mongodb.connect(DATABASE_URL);
    //   Do stuff
    const result = await connection
      .db(db)
      .collection(collection)
      .find(query)
      .toArray();
    return result ? result[0] : null;
  } catch (e) {
    console.log(
      "____________________________________________________________________________________"
    );
    console.log("dberror", e);
    console.log(
      "____________________________________________________________________________________"
    );
  }
};

exports.find = async ({ db, collection, query, page = 1, perPage = 10 }) => {
  try {
    const connection = await mongodb.connect(DATABASE_URL);
    //   Do stuff
    const result = await connection
      .db(db)
      .collection(collection)
      .find(query)
      .sort({ updated_at: -1 })
      .skip(page ? (page - 1) * perPage : undefined)
      .limit(perPage ? perPage : undefined)
      .toArray();
    return result;
  } catch (e) {
    console.log(
      "____________________________________________________________________________________"
    );
    console.log("dberror", e);
    console.log(
      "____________________________________________________________________________________"
    );
  }
};

exports.update = async (db, collection, query, data) => {
  const connection = await mongodb.connect(DATABASE_URL);
  //   Do stuff
  await connection.close();
};

exports.delete = async (db, collection, query) => {
  const connection = await mongodb.connect(DATABASE_URL);
  //   Do stuff
  await connection.close();
};
