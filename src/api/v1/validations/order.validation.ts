import {string, ObjectSchema, object, number, boolean, date} from 'yup'
import { order } from '../types/interfaces/order.interface'

export const orderSchema:ObjectSchema<order> = object({
    orderDate:date().required(),
    paymentMethodId:string().required(),
    shippingAddressId:string().required(),
    shippingMethodId:string().required(),
    orderTotal:number().required(),
    orderStatusId:string().required()
})

