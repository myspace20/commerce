import {string, ObjectSchema, object, number, boolean} from 'yup'
import { variation, variationOption } from '../types/interfaces/variation.interface'


export const variationSchema:ObjectSchema<variation> = object({
    categoryId:string().required().uuid(),
    name:string().required().max(30)
})


export const variationOptionSchema:ObjectSchema<variationOption> = object({
    variationId:string().required().uuid(),
    value:string().required().max(30)
})