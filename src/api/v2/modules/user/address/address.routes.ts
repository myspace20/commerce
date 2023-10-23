import { Router } from "express";
import {
  addUserAddressHandler,
  deleteUserAddressHandler,
  getUserAddressHistoryHandler,
  updateUserAddressHandler,
} from "./address.controller";
import requireAuth from "../../../middlewares/requireAuth";
import { inputValidation } from "../../../middlewares/input.validation";
import {
  addUserAddressSchema,
  deleteUserAddressSchema,
  getUserAddressHistorySchema,
  updateUserAddressSchema,
} from "./address.schema";
import catchAsync from "../../../utils/catchAsync";

const userAddressRouter = Router();

userAddressRouter.post(
  "/user/address/add",
  requireAuth,
  inputValidation(addUserAddressSchema),
  catchAsync(addUserAddressHandler)
);

userAddressRouter.put(
  "/user/address/update/:id",
  requireAuth,
  inputValidation(updateUserAddressSchema),
  catchAsync(updateUserAddressHandler)
);

userAddressRouter.get(
  "/user/address/get/all",
  requireAuth,
  inputValidation(getUserAddressHistorySchema),
  catchAsync(getUserAddressHistoryHandler)
);

userAddressRouter.delete(
  "/user/address/remove",
  requireAuth,
  inputValidation(deleteUserAddressSchema),
  catchAsync(deleteUserAddressHandler)
);

export default userAddressRouter;
