import {string, ObjectSchema, object, number, boolean, bool} from 'yup'
import { address, paymentMethodType, userAddress, userCredentials, userReview } from '../types/interfaces/user.interface'

export const credentialsSchema: ObjectSchema <userCredentials> = object({
    email: string().required().email('Invalid email'),
    password: string().required()
})

export const addressSchema:ObjectSchema < address > = object({
    unitNumber:string().required(),
    streetAddress:string().required(),
    addressLine1:string().optional(),
    addressLine2:string().optional(),
    city : string().required(),
    region : string().required(),
    postalCode: string().required(),
    countryId:string().required(),
    addressId:string().required()
})

export const userAddressSchema:ObjectSchema <userAddress> = object({
    addressId:string().required(),
    isDefault:boolean().required()
})

export const reviewsSchema:ObjectSchema<userReview> = object({
    orderedProductId:string().required().uuid(),
    ratingValue:number().required(),
    comment:string().required()
})

export const paymentMethodSchema:ObjectSchema<paymentMethodType> = object({
    paymentTypeId:string().required(),
    provider:string().required(),
    accountNumber:string().required(),
    expiryDate:string().required(),
    isDefault:boolean().required()

})

