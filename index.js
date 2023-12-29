const express = require("express");
const { PORT, DATABASE_URL } = require("./config");
const { getDatabaseConnection, findOne } = require("./db");

const port = PORT || 3001;
const app = express();
app.use(express.json());

console.log(
  "____________________________________________________________________________________"
);
console.log(DATABASE_URL);
console.log(
  "____________________________________________________________________________________"
);
findOne().then();
app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello App" });
});

app.listen(port, () => {
  console.log(
    "____________________________________________________________________________________"
  );
  console.log(`App is listening on port ${port}`);
  console.log(
    "____________________________________________________________________________________"
  );
});
