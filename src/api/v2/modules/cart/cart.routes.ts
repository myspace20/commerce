import { Router } from "express";
import { addToCartHandler, 
    deleteCartHandler, 
    deleteCartsHandler, 
    getUserCartHandler 
} from "./cart.controller";



const cartRouter = Router()

cartRouter.get("cart/user/get", getUserCartHandler)

cartRouter.post("cart/add", addToCartHandler)

cartRouter.post("cart/remove", deleteCartHandler)

cartRouter.delete("cart/remove/all", deleteCartsHandler)

export default cartRouter