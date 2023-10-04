import { Router } from "express";
import {
    addPaymentMethodHandler,
    deleteUserPaymentmethodHandler,
    getUserPaymentmethodHandler,
    getUserPaymentmethodsHandler,
    updateUserPaymentMethodHandler
} from "./paymentMethod.controller";

const userPayMethodRouter = Router()

userPayMethodRouter.post("user/payment/add", addPaymentMethodHandler)

userPayMethodRouter.get("user/payment/get/:id", getUserPaymentmethodHandler)

userPayMethodRouter.get("user/payment/get/all", getUserPaymentmethodsHandler)

userPayMethodRouter.put("user/payment/update", updateUserPaymentMethodHandler)

userPayMethodRouter.delete("user/payment/remove", deleteUserPaymentmethodHandler)


export default userPayMethodRouter