import { prisma } from "../../../v1/server";
import ApiError from "../../utils/error";
import { logger } from "../../utils/logger";
import { userReview } from "./review.types";

export async function createReview(payload: userReview, userId: string) {
  try {
    const review = await prisma.user_review.create({
      data: {
        ordered_product_id: payload.orderedProductId,
        comment: payload.comment,
        rating_value: payload.ratingValue,
        userId,
      },
    });
    return review;
  } catch (e) {
    logger.error(e);
    throw new ApiError(400, "error while processing request");
  }
}

export async function getUserReviews(userId: string) {
  try {
    const reviews = await prisma.user_review.findMany({
      where: {
        userId,
      },
    });
    return reviews;
  } catch (e) {
    logger.error(e);
    throw new ApiError(400, "error while processing request");
  }
}

export async function updateUserReview(
  id: string,
  payload: Partial<userReview>
) {
  const updates: Partial<userReview> = {};

  if (payload.comment) {
    updates.comment = payload.comment;
  }
  if (payload.ratingValue) {
    updates.ratingValue = payload.ratingValue;
  }

  try {
    if (!updates.comment && !updates.ratingValue)
      throw Error("input is required");

    const review = await prisma.user_review.update({
      where: { id },
      data: updates,
    });
    return review;
  } catch (e) {
    logger.error(e);
    throw new ApiError(400, "error while processing request");
  }
}

export async function getUserReview(userId: string, id: string) {
  try {
    const review = await prisma.user_review.findFirst({
      where: {
        userId,
        id,
      },
    });
    return review;
  } catch (e) {
    logger.error(e);
    throw new ApiError(400, "error while processing request");
  }
}

export async function getReviews() {
  try {
    const reviews = await prisma.user_review.findMany({});
    return reviews;
  } catch (e) {
    logger.error(e);
    throw new ApiError(400, "error while processing request");
  }
}

export async function getReview(id: string) {
  try {
    const review = await prisma.user_review.findUnique({ where: { id } });
    return review;
  } catch (e) {
    logger.error(e);
    throw new ApiError(400, "error while processing request");
  }
}

export async function deleteReview(id: string) {
  try {
    const review = await prisma.user_review.delete({ where: { id } });
    return review;
  } catch (e) {
    logger.error(e);
    throw new ApiError(400, "error while processing request");
  }
}
