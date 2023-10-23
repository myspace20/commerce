import { prisma } from "../../../../v1/server";
import ApiError from "../../../utils/error";
import { logger } from "../../../utils/logger";
import { ToptionPayload } from "./option.types";

export async function createVariantOption(id: string, payload: ToptionPayload) {
  try {
    const option = await prisma.variation_option.create({
      data: {
        value: payload.value,
        variation_id: id,
      },
    });
    return option;
  } catch (e) {
    logger.error(e);
    throw new ApiError(400, "something went wrong, please try again");
  }
}

export async function getVariantOption(id: string) {
  try {
    const option = await prisma.variation_option.findUnique({
      where: { id },
    });
    return option;
  } catch (e) {
    logger.error(e);
    throw new ApiError(400, "something went wrong, please try again");
  }
}

export async function getVariantOptions() {
  try {
    const option = await prisma.variation_option.findMany({});
    return option;
  } catch (e) {
    logger.error(e);
    throw new ApiError(400, "something went wrong, please try again");
  }
}

export async function updateVariantOption(id: string, payload: ToptionPayload) {
  try {
    const updates: Partial<ToptionPayload> = {};
    if (payload.value) {
      updates.value = payload.value;
    }
    if (Object.keys(updates).length === 0) {
      throw Error();
    }
    const option = await prisma.variation_option.update({
      where: { id },
      data: updates,
    });
    return option;
  } catch (e) {
    logger.error(e);
    throw new ApiError(400, "something went wrong, please try again");
  }
}

export async function deleteVariantOption(id: string) {
  try {
    const option = await prisma.variation_option.delete({
      where: { id },
    });
    return option;
  } catch (e) {
    logger.error(e);
    throw new ApiError(400, "something went wrong, please try again");
  }
}
