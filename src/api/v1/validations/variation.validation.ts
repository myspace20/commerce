import {string, ObjectSchema, object, number, boolean} from 'yup'
import { variation, variationOption } from '../types/interfaces/variation.interface'


export const variationSchema:ObjectSchema<variation> = object({
    categoryId:string().required(),
    name:string().required()
})


export const variationOptionSchema:ObjectSchema<variationOption> = object({
    variationId:string().required(),
    value:string().required()
})