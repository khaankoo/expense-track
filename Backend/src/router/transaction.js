import { createTransaction, getAllTransaction, getOneTransaction, deleteTransaction, updateTransaction } from "../controller/transaction.js";
import express from "express"

const transaction = express.Router()


transaction.route("/").post(createTransaction).get(getAllTransaction).get(getOneTransaction);
transaction.route("/").delete(deleteTransaction).put(updateTransaction)
export { transaction }