import { createTransaction, getAllTransaction } from "../controller/transaction.js";
import express from "express"

const transaction = express.Router()


transaction.route("/").post(createTransaction).get(getAllTransaction)
export {transaction}