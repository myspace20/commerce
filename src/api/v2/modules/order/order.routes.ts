import { Router } from "express";
import {
    createOrderHandler,
    deleteOrderHandler,
    getAllOrdersHandler,
    getOrderByAddressHandler,
    getOrderByIdHandler,
    getUserOrdersHandler,
    updateOrderAddressHandler
} from "./order.controller";


const orderRouter = Router()


orderRouter.get("order/get/:id", getOrderByIdHandler)

orderRouter.get("order/get/all", getAllOrdersHandler)

orderRouter.get("order/get/user", getUserOrdersHandler)

orderRouter.get("order/get/address", getOrderByAddressHandler)

orderRouter.put("order/update/address", updateOrderAddressHandler)

orderRouter.post("order/create", createOrderHandler)

orderRouter.delete("order/delete/:id", deleteOrderHandler)

export default orderRouter