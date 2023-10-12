import { Router } from "express";
import {
    addProdConfigHamdler,
    deleteProductConfigHandler,
    getProductConfigHandler,
    getProductConfigsHandler,
    updatedProductConfigHandler
} from "./prodConfig.controller";

const prodConfigRouter = Router()


prodConfigRouter.post("/product/config/add", addProdConfigHamdler)


prodConfigRouter.get("/product/config/get/:id", getProductConfigHandler)


prodConfigRouter.get("/product/config/get/all", getProductConfigsHandler)


prodConfigRouter.put("/product/config/update/:id", updatedProductConfigHandler)


prodConfigRouter.delete("/product/config/remove", deleteProductConfigHandler)