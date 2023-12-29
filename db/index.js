const { DATABASE_URL } = require("../config");
const mongodb = require("mongodb").MongoClient;

exports.create = async (db, collection, data) => {
  const connection = await mongodb.connect(DATABASE_URL);
  //   Do stuff
  await connection.close();
};

exports.findOne = async (db, collection) => {
  const connection = await mongodb.connect(DATABASE_URL);
  //   Do stuff
  await connection.close();
};

exports.find = async (db, collection, query) => {
  const connection = await mongodb.connect(DATABASE_URL);
  //   Do stuff
  await connection.close();
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
