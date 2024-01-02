import express from "express";
import dotenv from "dotenv";
import bp from "body-parser";
import { pool } from "./db.js";
import { user } from "./router/user.js";

dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();
app.use(bp.json());

app.use('/users', user)

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});


app.post("/createTable", async (_, res) => {
  try {
    const tableQueryText = `
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL
    )`;

    await pool.query(tableQueryText);
    res.send('ok');

  } catch (error) {
    console.error(error);
  }
});

