import { prisma } from "../../../../v1/server";
import { TpaymentType, TpaymentTypeParams } from "./paymentType.types";


export async function createPaymentType(
    payload: TpaymentType
) {
    try {
        const paymentType = await prisma
            .payment_type.create({
                data: {
                    value: payload.value
                }
            })
        return paymentType
    } catch (e) {

    }
}


export async function getAllPaymentTypes() {
    try {
        const paymentType = await prisma
            .payment_type.findMany({})
        return paymentType
    } catch (e) {

    }
}

export async function getPaymentTypeByValue(
    payload: TpaymentType
) {
    try {
        const paymentType = await prisma
            .payment_type.findFirst({
                where: { value: payload.value }
            })
        return paymentType
    } catch (e) {

    }
}

export async function getPaymentTypeById(
    id: TpaymentTypeParams
) {
    try {
        const paymentType = await prisma
            .payment_type.findUnique({
                where: id
            })
        return paymentType
    } catch (e) {

    }
}

export async function updatePaymentType(
    id: TpaymentTypeParams,
    payload: TpaymentType
) {
    try {
        const paymentType = await prisma
            .payment_type.update({
                where: id,
                data: {
                    value: payload.value
                }
            })
        return paymentType
    } catch (e) {

    }
}

export async function deletePaymentType(
    id: TpaymentTypeParams
) {
    try {
        const paymentType = await prisma
            .payment_type.delete({
                where: id
            })
        return paymentType
    } catch (e) {

    }
}

