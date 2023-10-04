import { string, ObjectSchema, object} from 'yup'
import { statusParam, TstatusPayload } from "./status.types"


const params = {
    id: string()
        .required("id is required")
        .uuid("invalid id")
}

const payload = {
    status: string()
        .max(15)
        .required("status is required")
}

export const createOrderStatusSchema:
    ObjectSchema<TstatusPayload> = object({
        ...payload
    })

export const getOrderStatusByIdSchema:
    ObjectSchema<statusParam> = object({
        ...params
    })

export const updateOrderStatusSchema:
    ObjectSchema<statusParam & TstatusPayload> = object({
        ...params,
        ...payload
    })

export const deleteOrderStatusSchema:
    ObjectSchema<statusParam> = object({
        ...params
    })







