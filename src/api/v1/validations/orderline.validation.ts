import {string, ObjectSchema, object, number, boolean, date} from 'yup'
import { orderLine } from '../types/interfaces/orderline.interface'


export const orderLineSchema:ObjectSchema<orderLine> = object({
    productItemId:string().required(),
    orderId:string().required(),
    qty:number().required(),
    price:number().required()
})

