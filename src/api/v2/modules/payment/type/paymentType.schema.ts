import { ObjectSchema, object, string } from "yup"
import { TpaymentType, TpaymentTypeParams } from "./paymentType.types"


const payload = {
    value: string()
        .max(12)
        .required("value is required")
}

const params = {
    id: string()
        .required("id is required")
        .uuid("invalid id")
}

export const createPaymentTypeSchema:
    ObjectSchema<TpaymentType> = object({
        ...payload
    })

export const getPaymentTypeByIdSchema:
    ObjectSchema<TpaymentTypeParams> = object({
        ...params
    })

export const updatePaymentTypeSchema:
    ObjectSchema<TpaymentTypeParams & TpaymentType> = object({
        ...params,
        ...payload
    })

export const deletePaymentTypeSchema:
    ObjectSchema<TpaymentTypeParams> = object({
        ...params
    })

export const getPaymentTypeByValueSchema:
    ObjectSchema<TpaymentType> = object({
        ...payload
    })

