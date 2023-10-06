import { Router } from "express";
import {
    addUserAddressHandler,
    deleteUserAddressHandler,
    getUserAddressHistoryHandler,
    updateUserAddressHandler
} from "./address.controller";

const userAddressRouter = Router()


userAddressRouter.post("user/address/add", addUserAddressHandler)

userAddressRouter.put("user/address/update/:id", updateUserAddressHandler)

userAddressRouter.get("user/address/get/all", getUserAddressHistoryHandler)

userAddressRouter.delete("user/address/remove", deleteUserAddressHandler)

export default userAddressRouter