import { Router } from "express";
import { decreaseCartItemQtyHandler, deleteCartItemHandler, increaseItemQtyHandler } from "./cartItem.controller";

const cartItemRouter = Router()

cartItemRouter.post("cart/item/increaseQty", increaseItemQtyHandler)

cartItemRouter.post("cart/item/decreaseQty", decreaseCartItemQtyHandler)

cartItemRouter.delete("cart/item/remove", deleteCartItemHandler)


export default cartItemRouter