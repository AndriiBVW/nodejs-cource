import express from "express";
import { router as usersRouter } from "./users/users.js";

const PORT = 3000;
const app = express();

app.use((req, res, next) => {
  console.log(`Time: ${Date.now()}`);
  next();
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/err", (req, res) => {
  throw new Error("Error!");
});

app.use("/users", usersRouter);

app.use((err, req, res, next) => {
  console.error(err.message);
  res.status(401).send(err.message);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
