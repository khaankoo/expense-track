import express from "express";
import dotenv from "dotenv";
import bp from "body-parser";
import { pool } from "./src/utils/db.js";
import { user } from "./src/router/user.js";
import cors from "cors";
import { category } from "./src/router/category.js";

dotenv.config();

const PORT = process.env.PORT || 8000;
const app = express();
app.use(cors());
app.use(bp.json());

app.use("/users", user);
app.use("/category", category);

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
      description VARCHAR(255) NOT NULL,
      name VARCHAR(255) NOT NULL,
      createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updateAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      currency_image VARCHAR(50)
      )`;

    await pool.query(tableQueryText);
    res.send("ok");
  } catch (error) {
    console.error(error);
  }
});

app.post("/createTransactionTable", async (_, res) => {
  try {
    const tableQueryText = `
    CREATE TABLE IF NOT EXISTS transaction (
      id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
      user_id uuid REFERENCES users(id),
      name VARCHAR (255) NOT NULL,
      amount VARCHAR (255) NOT NULL,
      transaction_type VARCHAR (3) CHECK (transaction_type IN ('INC', 'EXP')),
      description VARCHAR (255) NOT NULL, 
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      category_id uuid REFERENCES category(id)
      )`;
    await pool.query(tableQueryText);
    res.send("ok");
  } catch (error) {
    console.error(error, "error");
  }
});

app.post("/dropTable", async (_, res) => {
  try {
    const tableQueryText = `
      DROP TABLE category`;

    await pool.query(tableQueryText);
    res.send("ok");
  } catch (error) {
    console.error(error);
  }
});
