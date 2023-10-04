import { Router } from "express";
import { deleteLineItemHandler } from "./orderLine.controller";


const lineItemRouter = Router()

lineItemRouter.delete("order/item/remove/:id", deleteLineItemHandler)


export default lineItemRouter