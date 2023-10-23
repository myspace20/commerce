import { Router } from "express";
import { createUserHandler, findUserByEmailHandler, updateUserHandler } from "./user.controller";
import catchAsync from "../../utils/catchAsync";
import { inputValidation } from "../../middlewares/input.validation";
import { findUserByEmailSchema, updateUserSchema, userSchema } from "./user.schema";
import requireAuth from "../../middlewares/requireAuth";
import roleAuth from "../../middlewares/roleAuth";

const userRouter = Router();

userRouter.post(
  "/user/signup",
  inputValidation(userSchema),
  catchAsync(createUserHandler)
);

userRouter.post("/user/find", [
  inputValidation(findUserByEmailSchema),
  requireAuth,
  roleAuth,
  catchAsync(findUserByEmailHandler),
]);

userRouter.post("/user/update", [
    requireAuth,
    inputValidation(updateUserSchema),
    roleAuth,
    catchAsync(updateUserHandler),
  ]);


export default userRouter;
