import { Router } from "express";
import {
    deleteProductItemHandler,
    updateProductItemHandler,
    getProductItemsHandler,
    getProductItemHandler,
    createProductItemHandler
} from "./productItem.controllers";

const productItemRouter = Router()


productItemRouter.post("productItem/create", createProductItemHandler)

productItemRouter.get("productItem/get/all", getProductItemsHandler)

productItemRouter.get("productItem/get/:id", getProductItemHandler)

productItemRouter.put("productItem/update/:id", updateProductItemHandler)

productItemRouter.delete("productItem/remove/:id", deleteProductItemHandler)

export default productItemRouter