import { prisma } from "../../../../v1/server";
import { TpayMethod, TpayMethodParam } from "./paymentMethod.types";


export async function addPaymentMethod(
    userId:string,
    payload:TpayMethod
){
    try {
        const userPaymentMethod = await prisma.user_payment_method.create({
            data:{
                payment_type_id:payload.paymentTypeId,
                provider:payload.provider,
                expiry_date:payload.expiryDate,
                is_default:payload.isDefault,
                account_number:payload.accountNumber,
                userId
            }
        })
        return userPaymentMethod
    } catch (e) {
        
    }
}

export async function getUserPaymentmethod(
    id:TpayMethodParam
){
    try {
        const userPaymentMethod = await prisma.user_payment_method.findUnique({
            where:id
        })
        return userPaymentMethod
    } catch (e) {
        
    }
}

export async function getUserPaymentmethods(
    userId:string
){
    try {
        const userPaymentMethod = await prisma.user_payment_method.findUnique({
            where:{id:userId}
        })
        return userPaymentMethod
    } catch (e) {
        
    }
}

export async function updateUserPaymentMethod(
    id:string,
    payload:TpayMethod
){
    try {
        const updates: Partial<TpayMethod> = {}

    if (payload.accountNumber) {
        updates.accountNumber = payload.accountNumber
    }
    if (payload.provider) {
        updates.provider = payload.provider
    }
    if (payload.isDefault) {
        updates.isDefault = payload.isDefault
    }
    if (payload.expiryDate) {
        updates.expiryDate = payload.expiryDate
    }
    if (payload.paymentTypeId) {
        updates.paymentTypeId = payload.paymentTypeId
    }
        const userPaymentMethod = await prisma.user_payment_method.update({
            where:{id},
            data:updates
        })
        return userPaymentMethod
    } catch (e) {
        
    }
}

export async function deleteUserPaymentmethod(
    id:string
){
    try {
        const userPaymentMethod = await prisma.user_payment_method.delete({
            where:{id}
        })
        return userPaymentMethod
    } catch (e) {
        
    }
}