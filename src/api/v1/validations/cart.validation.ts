import {string, ObjectSchema, object, number, boolean} from 'yup'
import { cartItem } from '../types/interfaces/cart.interface'


export const cartItemSchema:ObjectSchema<cartItem> = object({
    cartId:string().required(),
    productItemId:string().required(),
    qty:number().required()
})

