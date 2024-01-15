import { createCategory, getAllCategory } from "../controller/category";
import { express } from "express";

const category = express.Router()



category.router("/").post(createCategory).get(getAllCategory);
export {category}