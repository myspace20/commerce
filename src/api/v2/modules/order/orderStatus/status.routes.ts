import { Router } from "express";
import { createOrderStatusHandler, deleteOrderStatusHandler, getOrderStatusByIdHandler, updateOrderStatusHandler } from "./status.controller";

const orderStatusRouter = Router()


orderStatusRouter.post("orderStatus/create", createOrderStatusHandler)

orderStatusRouter.get("orderStatus/get/:id", getOrderStatusByIdHandler)

orderStatusRouter.put("orderStatus/update/:id", updateOrderStatusHandler)

orderStatusRouter.delete("orderStatus/remove/:id", deleteOrderStatusHandler)

export default orderStatusRouter