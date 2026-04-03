import express from "express";
import { router as usersRouter } from "./users/users.js";

const PORT = 3000;
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/users", usersRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
