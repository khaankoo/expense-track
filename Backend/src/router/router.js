import { createCategory, getAllCategory } from "../controller/category";
import { express } from "express";

const category = express.Router()



category.router("/category").post(createCategory).get(getAllCategory);
export { category }