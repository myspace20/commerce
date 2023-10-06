import { Router } from "express";
import {
    createShippingMethodHandler,
    deleteShippingMethodHandler,
    getShippingMethodHandler,
    getShippingMethodsHandler,
    updateShippingMethodHandler
} from "./shippingMethod.controller";



const shippingMethodRouter = Router()


shippingMethodRouter.post("shipping/method/create", createShippingMethodHandler)

shippingMethodRouter.get("shipping/method/get/:id", getShippingMethodHandler)

shippingMethodRouter.get("shipping/method/get/all", getShippingMethodsHandler)

shippingMethodRouter.put("shipping/method/update/:id", updateShippingMethodHandler)

shippingMethodRouter.delete("shipping/method/remove/:id", deleteShippingMethodHandler)

export default shippingMethodRouter