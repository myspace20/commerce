import { Router } from "express";
import {
  createReviewHandler,
  deleteReviewHandler,
  getReviewHandler,
  getReviewsHandler,
  getUserReviewHandler,
  getUserReviewsHandler,
  updateReviewHandler,
} from "./review.controllers";
import requireAuth from "../../middlewares/requireAuth";
import { inputValidation } from "../../middlewares/input.validation";
import {
  createReviewSchema,
  deleteReviewSchema,
  getReviewSchema,
  updateReviewSchema,
} from "./review.schema";
import catchAsync from "../../utils/catchAsync";

const reviewRoutes = Router();

reviewRoutes.post(
  "user/orders/review/create",
  requireAuth,
  inputValidation(createReviewSchema),
  catchAsync(createReviewHandler)
);

reviewRoutes.get(
  "orders/reviews/get",
  requireAuth,
  catchAsync(getReviewsHandler)
);

reviewRoutes.get(
  "orders/review/get/:id",
  requireAuth,
  inputValidation(getReviewSchema),
  catchAsync(getReviewHandler)
);

reviewRoutes.get(
  "user/orders/reviews/get",
  requireAuth,
  catchAsync(getUserReviewsHandler)
);

reviewRoutes.get(
  "user/orders/reviews/get/:id",
  requireAuth,
  inputValidation(getReviewSchema),
  catchAsync(getUserReviewHandler)
);

reviewRoutes.post(
  "user/orders/reviews/update/:id",
  requireAuth,
  inputValidation(updateReviewSchema),
  catchAsync(updateReviewHandler)
);

reviewRoutes.delete(
  "user/orders/reviews/remove/:id",
  requireAuth,
  inputValidation(deleteReviewSchema),
  catchAsync(deleteReviewHandler)
);

export default reviewRoutes;
