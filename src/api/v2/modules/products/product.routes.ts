import { Router } from "express";
import {
    createProductHandler,
    deleteProductHandler,
    getProductHandler,
    getProductsHandler,
    updateProductHandler
} from "./product.controller";

const productRouter = Router()


productRouter.post("product/create", createProductHandler)

productRouter.get("product/get/all", getProductsHandler)

productRouter.get("product/get/:id", getProductHandler)

productRouter.put("product/update/:id", updateProductHandler)

productRouter.delete("product/remove/:id", deleteProductHandler)

export default productRouter