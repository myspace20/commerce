import { Router } from "express";
import {
  createPromotionHandler,
  deletePromotionHandler,
  getPromotionHandler,
  getPromotionsHandler,
  updatePromotionHandler,
} from "./promo.controller";
import requireAuth from "../../middlewares/requireAuth";
import roleAuth from "../../middlewares/roleAuth";
import catchAsync from "../../utils/catchAsync";

const promotionRouter = Router();

promotionRouter.post(
  "/promotion/create",
  requireAuth,
  roleAuth,
  catchAsync(createPromotionHandler)
);

promotionRouter.get(
  "/promotion/get/:id",
  requireAuth,
  roleAuth,
  catchAsync(getPromotionHandler)
);

promotionRouter.get(
  "/promotion/get/all",
  requireAuth,
  catchAsync(getPromotionsHandler)
);

promotionRouter.put(
  "/promotion/update/:id",
  requireAuth,
  roleAuth,
  catchAsync(updatePromotionHandler)
);

promotionRouter.delete(
  "/promotion/remove:/id",
  requireAuth,
  roleAuth,
  catchAsync(deletePromotionHandler)
);

export default promotionRouter;
