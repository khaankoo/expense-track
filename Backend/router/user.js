import express from "express"
import { 
    createUser,
    deleteUser,
    getOneUser,
    getUsers,
    updateUser,
 } from "./../controller/user.js"
const user = express.Router();

user.route('/').get(getUsers).post(createUser);
user.route('/').get(getOneUser).delete(deleteUser).put(updateUser)


export { user }