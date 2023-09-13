import { string, ObjectSchema, object, number, boolean } from 'yup'
import { product, productCategory, productConfiguration, productParams } from './product.types'


const payload = {
    categoryId: string()
        .required("categoryId is required")
        .uuid("invalid id"),
    name: string()
        .max(60)
        .required("name is required"),
    description: string()
        .max(200)
        .required("description is required"),
    productImage: string()
        .max(60)
        .required("product image is required")
}

const params = {
    id: string()
        .required("id required")
        .uuid("invalid id")
}

export const createProductSchema:
    ObjectSchema<product> = object({
        ...payload
    })

export const updateProductSchema:
    ObjectSchema<Partial<product>> = object({
        ...payload,
        ...params
    })

export const getProductSchema:
    ObjectSchema<productParams> = object({
        ...params
    })

export const deleteProductSchema:
    ObjectSchema<productParams> = object({
        ...params
    })








export const productConfigSchema: ObjectSchema<productConfiguration> = object({
    productItemId: string().required(),
    variationOptionId: string().required(),
    value: string().required(),
    variationId: string().required(),
})


export const productCatSchema: ObjectSchema<productCategory> = object({
    parentCategoryId: string().required(),
    categoryName: string().required()
})

