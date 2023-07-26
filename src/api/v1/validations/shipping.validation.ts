import {string, ObjectSchema, object, number, boolean, date} from 'yup'
import { shippingMethod } from '../types/interfaces/shipping.interface'


export const shippingMethodSchema:ObjectSchema<shippingMethod> = object({
    name:string().required(),
    price:number().required()
})