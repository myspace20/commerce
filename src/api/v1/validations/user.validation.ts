import {string, ObjectSchema, object, number, boolean, bool} from 'yup'
import { address, paymentMethodType, userAddress, userCredentials, userReview } from '../types/interfaces/user.interface'

export const credentialsSchema: ObjectSchema <userCredentials> = object({
    email: string().required().email('invalid email').max(100),
    password: string().required().min(8).max(30)
})


export const addressSchema:ObjectSchema < address > = object({
    unitNumber:string().required().max(10),
    streetAddress:string().required().max(50, 'field length greater than allowed limit'),
    addressLine1:string().optional().max(50, 'field length greater than allowed limit'),
    addressLine2:string().optional().max(50, 'field length greater than allowed limit'),
    city : string().required().max(30),
    region : string().required().max(30),
    postalCode: string().required().max(20),
    countryId:string().required().uuid(),
    addressId:string().required().uuid()
})

export const userAddressSchema:ObjectSchema <userAddress> = object({
    addressId:string().required().uuid(),
    isDefault:boolean().required()
})

export const reviewsSchema:ObjectSchema<userReview> = object({
    orderedProductId:string().required().uuid(),
    ratingValue:number().required().max(2),
    comment:string().required().max(200)
})

export const paymentMethodSchema:ObjectSchema<paymentMethodType> = object({
    paymentTypeId:string().required().uuid(),
    provider:string().required().max(30),
    accountNumber:string().required().max(40),
    expiryDate:string().required().max(15),
    isDefault:boolean().required()

})

