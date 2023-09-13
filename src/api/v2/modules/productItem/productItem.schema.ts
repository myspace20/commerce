import { string, ObjectSchema, object, number, boolean } from 'yup'
import { productItem, productItemParams } from './productItem.types'


const payload = {
    productId: string()
        .required("product id is required")
        .uuid("invalid id"),
    SKU: string()
        .max(50)
        .required("sku is required"),
    qtyInStock: number()
        .max(6)
        .required("quantity is required"),
    productImage: string()
        .max(60)
        .required("product image is required"),
    price: number()
        .max(7)
        .required("price is required")
}

const params = {
    id: string()
        .required("id is required")
        .uuid("invalid id")
}

export const createProductItemSchema:
    ObjectSchema<productItem> = object({
        ...payload
    })

export const getProductItemSchema:
    ObjectSchema<productItemParams> = object({
        ...params
    })

export const updateProductItemSchema:
    ObjectSchema<productItemParams> = object({
        ...payload,
        ...params
    })

export const deleteProductItemSchema:
    ObjectSchema<productItemParams> = object({
        ...params
    })

