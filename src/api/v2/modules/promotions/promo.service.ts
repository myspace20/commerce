import { prisma } from "../../../v1/server";
import ApiError from "../../utils/error";
import { logger } from "../../utils/logger";
import { TpromoPayload } from "./promo.types";

export async function createPromotion(id: string, payload: TpromoPayload) {
  try {
    const promotion = await prisma.product_category.update({
      where: { id: "" },
      data: {
        promotion: {
          create: [
            {
              promotion: {
                create: {
                  description: payload.description,
                  discount_rate: payload.discountRate,
                  start_date: payload.startDate,
                  end_date: payload.endDate,
                  name: payload.name,
                },
              },
            },
          ],
        },
      },
      include: {
        products: true,
        parent_category: true,
      },
    });
    return promotion;
  } catch (e) {
    logger.error(e);
    throw new ApiError(400, "error while processing request");
  }
}

export async function getPromotion(id: string) {
  try {
    const promotion = await prisma.promotion.findUnique({
      where: { id },
    });
    return promotion;
  } catch (e) {
    logger.error(e);
    throw new ApiError(400, "error while processing request");
  }
}

export async function getPromotions() {
  try {
    const promotion = await prisma.promotion.findMany({
      include: {
        product_category: true,
      },
    });
    return promotion;
  } catch (e) {
    logger.error(e);
    throw new ApiError(400, "error while processing request");
  }
}

export async function updatePromotion(id: string, payload: TpromoPayload) {
  try {
    const updates: Partial<TpromoPayload> = {};
    if (payload.description) {
      updates.description = payload.description;
    }
    if (payload.discountRate) {
      updates.discountRate = payload.discountRate;
    }
    if (payload.name) {
      updates.name = payload.name;
    }
    if (payload.endDate) {
      updates.endDate = payload.endDate;
    }
    if (payload.startDate) {
      updates.startDate = payload.startDate;
    }
    const promotion = await prisma.promotion.update({
      where: { id },
      data: updates,
    });
    return promotion;
  } catch (e) {
    logger.error(e);
    throw new ApiError(400, "error while processing request");
  }
}

export async function deletePromotion(id: string) {
  try {
    const promotion = await prisma.promotion.delete({
      where: { id },
    });
    return promotion;
  } catch (e) {
    logger.error(e);
    throw new ApiError(400, "error while processing request");
  }
}
