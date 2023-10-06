import { ObjectSchema, object, string, date, boolean } from "yup"
import { TaddressPayload, addressParam } from "./address.types"


const payload = {
    countryId: string()
        .required("payment type id is required")
        .uuid("invalid id"),
    unitNumber: string()
        .required("unitNumber is required")
        .max(5),
    city: string()
        .required("provider is required")
        .max(10),
    postalCode: string()
        .required("postalCode is required")
        .max(5),
    streetAddress: string()
        .required("streetAddress is required")
        .max(15),
    region: string().required("region is required")
        .max(10)
}

const params = {
    id: string()
        .required("id is required")
        .uuid("invalid id")
}



export const addUserAddressSchema:
    ObjectSchema<TaddressPayload> = object({
        ...payload
    })

export const updateUserAddressSchema:
    ObjectSchema<addressParam & TaddressPayload> = object({
        ...params,
        ...payload
    })

export const getUserAddressHistorySchema:
    ObjectSchema<addressParam > = object({
        ...params
    })

export const deleteUserAddressSchema:
    ObjectSchema<addressParam> = object({
        ...params
    })