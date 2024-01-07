const express = require("express");
const { PORT } = require("./config");
const { authInterceptor } = require("./interceptors/auth.interceptor");
const { authRouter, notesRouter } = require("./routes/index.routes");

const port = PORT || 3001;
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello App" });
});

app.use("/api/v1/auth", authRouter);

app.use(authInterceptor);
app.use("/api/v1/notes", notesRouter);

app.listen(port, () => {
  console.log(
    "____________________________________________________________________________________"
  );
  console.log(`App is listening on port ${port}`);
  console.log(
    "____________________________________________________________________________________"
  );
});
