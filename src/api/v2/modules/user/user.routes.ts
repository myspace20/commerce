import { Router } from "express";
import { createUserHandler, findUserByEmailHandler } from "./user.controller";

const userRouter = Router()

userRouter.post("/user/signup", createUserHandler)

userRouter.post("/user/find", findUserByEmailHandler)

export default userRouter