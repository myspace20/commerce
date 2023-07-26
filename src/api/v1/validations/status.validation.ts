import {string, ObjectSchema, object, number, boolean, date} from 'yup'
import { orderStatus } from '../types/interfaces/status.interface'


export const orderStatusSchema:ObjectSchema<orderStatus> = object({
    status:string().required()
})