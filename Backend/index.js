import express from "express";
import dotenv from "dotenv";
import bp from "body-parser";
import { pool } from "./src/utils/db.js"
import { user } from "./src/router/user.js";

dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();
app.use(bp.json());

app.use("/users", user);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});

app.post("/createTable", async (_, res) => {
  try {
    const tableQueryText = `
    CREATE TABLE IF NOT EXISTS users (
      id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
      name VARCHAR(50) NOT NULL,
      email VARCHAR(50) UNIQUE NOT NULL,
      password TEXT,
      avatar_img blob,
      createdAt TIMESTAMP,
      updateAt TIMESTAMP,
      currency_type TEXT DEFAUL ‘MNT’
      )`;

    await pool.query(tableQueryText);
    res.send("ok");
  } catch (error) {
    console.error(error);
  }
});
