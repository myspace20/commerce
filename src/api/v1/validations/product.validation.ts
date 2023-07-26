import {string, ObjectSchema, object, number, boolean} from 'yup'
import { product, productCategory, productConfiguration, productItem } from '../types/interfaces/product.interface'


export const productSchema:ObjectSchema<product> = object ({
    categoryId:string().required(),
    name:string().required(),
    description:string().required(),
    productImage:string().required()
})

export const productItemSchema:ObjectSchema<productItem> = object({
    productId:string().required(),
    SKU:string().required(),
    qtyInStock:number().required(),
    productImage:string().required(),
    price:number().required()
})


export const productConfigSchema:ObjectSchema<productConfiguration> = object({
    productItemId:string().required(),
    variationOptionId:string().required(),
    value:string().required(),
    variationId:string().required(),
})


export const productCatSchema:ObjectSchema<productCategory> = object({
    parentCategoryId:string().required(),
    categoryName:string().required()
})

