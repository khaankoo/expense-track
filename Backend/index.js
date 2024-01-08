import express from "express";
import dotenv from "dotenv";
import bp from "body-parser";
import { pool } from "./src/utils/db.js"
import { user } from "./src/router/user.js";
import cors from "cors"

dotenv.config();

const PORT = process.env.PORT || 8000;
const app = express();
app.use(cors())
app.use(bp.json());

app.use("/users", user);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});

app.post("/createTable", async (_, res) => {
  try {
    const tableQueryText = `
    CREATE TABLE IF NOT EXISTS users (
      id uuid DEFAULT gen_random_uuid(),
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      password TEXT NOT NULL,
      avatar_img BYTEA,
      createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updateAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      currency_type TEXT
      )`;

    await pool.query(tableQueryText);
    res.send("ok");
  } catch (error) {
    console.error(error);
  }
});

app.post("/createCategoryTable", async (_, res) => {
  try {
    const tableQueryText = `
    CREATE TABLE IF NOT EXISTS category (
      id uuid DEFAULT gen_random_uuid(),
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      password TEXT NOT NULL,
      avatar_img BYTEA,
      createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updateAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      currency_type TEXT
      )`;

    await pool.query(tableQueryText);
    res.send("ok");
  } catch (error) {
    console.error(error);
  }
});

app.post("/dropTable", async (_, res) => {
  try {
    const tableQueryText = `
      DROP TABLE users`;

    await pool.query(tableQueryText);
    res.send("ok");
  } catch (error) {
    console.error(error);
  }
});