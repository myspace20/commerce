import {string, ObjectSchema, object, number} from 'yup'
import { userAddress, userCredentials, userReview } from '../types/interfaces/user.interface'

export const credentials: ObjectSchema <userCredentials> = object({
    email: string().required().email('Invalid email'),
    password: string().required()
})

export const address:ObjectSchema < userAddress > = object({
    unitNumber:string().required(),
    streetAddress:string().required(),
    addressLine1:string().optional(),
    addressLine2:string().optional(),
    city : string().required(),
    region : string().required(),
    postalCode: string().required(),
    countryId:string().required()
})

export const reviews:ObjectSchema<userReview> = object({
    orderedProductId:string().required().uuid(),
    ratingValue:number().required(),
    comment:string().required()
})

