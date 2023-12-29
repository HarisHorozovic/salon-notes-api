const express = require("express");

const port = 3001;
const app = express();
app.use(express.json());

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
