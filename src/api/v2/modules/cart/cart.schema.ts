import { ObjectSchema, object, string } from "yup";
import { cartIdParams, itemIdParams } from "./cart.types";
import { cartItemSchema } from "../../../v1/validations/cart.validation";

// const payload = {
//     userId: string()
//         .required("category name is required")
//         .max(200)
// }

const params = {
    id: string()
        .required("id is required")
        .uuid("invalid id")
}


export const addToCartSchema:
    ObjectSchema<itemIdParams> = object({
        ...params
    })

export const deleteCartSchema:
    ObjectSchema<cartIdParams> = object({
        ...params
    })


export const increaseCartItemQtySchema:
    ObjectSchema<itemIdParams & cartIdParams> = object({
        ...params,
        ...params
    })

export const decreaseCartItemQtySchema:
    ObjectSchema<itemIdParams & cartIdParams> = object({
        ...params,
        ...params
    })

export const deleteCartItemSchema:
    ObjectSchema<itemIdParams> = object({
        ...params
    })



