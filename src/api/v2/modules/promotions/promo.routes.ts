import { Router } from "express";
import {
    createPromotionHandler,
    deletePromotionHandler,
    getPromotionHandler,
    getPromotionsHandler,
    updatePromotionHandler
} from "./promo.controller";

const promotionRouter = Router()

promotionRouter.post("/promotion/create", createPromotionHandler)

promotionRouter.get("/promotion/get/:id", getPromotionHandler)

promotionRouter.get("/promotion/get/all", getPromotionsHandler)

promotionRouter.put("/promotion/update/:id", updatePromotionHandler)

promotionRouter.delete("/promotion/remove:/id", deletePromotionHandler)

export default promotionRouter