import { Router } from "express";
import {
  createProductHandler,
  deleteProductHandler,
  getProductHandler,
  getProductsHandler,
  updateProductHandler,
} from "./product.controller";
import catchAsync from "../../utils/catchAsync";
import { inputValidation } from "../../../v1/middlewares/input.validation";
import { createProductSchema } from "./product.schema";
import requireAuth from "../../middlewares/requireAuth";
import roleAuth from "../../middlewares/roleAuth";

const productRouter = Router();

productRouter.post("/product/create", [
  requireAuth,
  roleAuth,
  inputValidation(createProductSchema),
  catchAsync(createProductHandler),
]);

productRouter.get("/product/get/all", catchAsync(getProductsHandler));

productRouter.get("/product/get/:id", getProductHandler);

productRouter.put("/product/update/:id", updateProductHandler);

productRouter.delete("/product/remove/:id", deleteProductHandler);

export default productRouter;
