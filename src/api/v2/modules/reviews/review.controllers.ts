import { Request, Response } from "express";
import { userReview } from "./review.types";
import {
  createReview,
  deleteReview,
  getReview,
  getReviews,
  getUserReview,
  getUserReviews,
  updateUserReview,
} from "./review.service";

export async function createReviewHandler(
  req: Request<{}, {}, userReview>,
  res: Response
) {
  const userId = res.locals.user.id;
  const review = await createReview(req.body, userId);
  return res.send(review);
}

export async function getUserReviewsHandler(req: Request, res: Response) {
  const userId = res.locals.user.id;
  const reviews = await getUserReviews(userId);
  return res.send(reviews);
}

export async function getUserReviewHandler(
  req: Request<{ id: string }>,
  res: Response
) {
  const userId = res.locals.user.id;
  const reviews = await getUserReview(userId, req.params.id);
  return res.send(reviews);
}

export async function getReviewsHandler(req: Request, res: Response) {
  const reviews = await getReviews();
  return res.send(reviews);
}

export async function updateReviewHandler(
  req: Request<{ id: string }, {}, userReview>,
  res: Response
) {
  const review = await updateUserReview(req.params.id, req.body);
  return res.send(review);
}

export async function getReviewHandler(
  req: Request<{ id: string }>,
  res: Response
) {
  const reviews = await getReview(req.params.id);
  return res.send(reviews);
}

export async function deleteReviewHandler(
  req: Request<{ id: string }>,
  res: Response
) {
  const review = await deleteReview(req.params.id);
  return res.send(review);
}
