import { string, ObjectSchema, object, number, boolean } from 'yup'
import { Taddress, Torder, TorderPayload, orderParams } from './order.types'


const payload = {
    paymentMethodId: string()
        .required("payment method id is required")
        .uuid("invalid id"),
    shippingAddressId: string()
        .required("shipping address id is required")
        .uuid("invalid id"),
    shippingMethodId: string()
        .required("shipping method id is required")
        .uuid("invalid id"),
    orderTotal: number()
        .max(7)
        .required("order total is required")
}

const params = {
    id: string()
        .required("id is required")
        .uuid("invalid id")
}

const address = {
    address: string()
        .max(50)
        .required("address is required")
}

export const createOrderSchema:
    ObjectSchema<TorderPayload> = object({
        ...payload
    })

export const getOrderByIdSchema:
    ObjectSchema<orderParams> = object({
        ...params
    })

export const getOrderByAddressSchema:
    ObjectSchema<Taddress> = object({
        ...address
    })



export const updateOrderAddressSchema:
    ObjectSchema<Taddress & orderParams> = object({
        ...address,
        ...params
    })

export const deleteOrderSchema:
    ObjectSchema<orderParams> = object({
        ...params
    })


export const deleteLineItemSchema:
    ObjectSchema<orderParams> = object({
        ...params
    })






