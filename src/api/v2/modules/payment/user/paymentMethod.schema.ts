import { ObjectSchema, object, string, date, boolean } from "yup"
import { TpayMethod, TpayMethodParam } from "./paymentMethod.types"


const payload = {
    paymentTypeId: string()
        .required("payment type id is required")
        .uuid("invalid id"),
    accountNumber: string()
        .required("accountNumber is required")
        .max(20),
    provider: string()
        .required("provider is required")
        .max(20),
    expiryDate: date()
        .required("date is required"),
    isDefault: boolean()
        .required("default value required")
}

const params = {
    id: string()
        .required("id is required")
        .uuid("invalid id")
}



export const addPaymentMethodSchema:
    ObjectSchema<TpayMethod> = object({
        ...payload
    })

export const getUserPaymentmethodSchema:
    ObjectSchema<TpayMethodParam> = object({
        ...params
    })

export const updateUserPaymentMethodSchema:
    ObjectSchema<TpayMethod & TpayMethodParam> = object({
        ...payload,
        ...params
    })

export const deleteUserPaymentmethodSchema:
    ObjectSchema<TpayMethodParam> = object({
        ...params
    })
