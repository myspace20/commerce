import {string, ObjectSchema, object, number, boolean} from 'yup'
import { cartItem } from '../types/interfaces/cart.interface'


export const cartItemSchema:ObjectSchema<cartItem> = object({
    cartId:string().required().uuid(),
    productItemId:string().required().uuid(),
    qty:number().required()
})

