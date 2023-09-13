import { ObjectSchema, object, string } from "yup";
import { prodCategory, prodCategoryParams, prodSubCategory, prodSubCategoryParams } from "./prodCategories.types";
import { productParams } from "../products/product.types";

const payload = {
    name: string()
        .required("category name is required")
        .max(200)
}

const params = {
    id: string()
        .required("id is required")
        .uuid("invalid id")
}


export const createProdCategorySchema:
    ObjectSchema<prodCategory> = object({
        ...payload
    })

export const getProdCategorySchema:
    ObjectSchema<prodCategoryParams> = object({
        ...params
    })

export const getProdSubCategorySchema:
    ObjectSchema<prodSubCategoryParams> = object({
        ...params
    })

export const updateProCategorySchema:
    ObjectSchema<prodCategory & prodCategoryParams> = object({
        ...params,
        ...payload
    })

export const updateProdSubCategorySchema:
    ObjectSchema<prodSubCategory & prodSubCategoryParams> = object({
        ...params,
        ...payload
    })

export const deleteprodCategorySchema:
    ObjectSchema<prodCategoryParams> = object({
        ...params
    })


export const deleteprodSubCategorySchema:
    ObjectSchema<prodSubCategoryParams> = object({
        ...params
    })


