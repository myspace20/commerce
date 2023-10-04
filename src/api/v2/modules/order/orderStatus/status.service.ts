import { prisma } from "../../../../v1/server";


export async function createOrderStatus(payload: string) {
    try {
        const status = await prisma
            .order_status.create({
                data: {
                    status: payload
                }
            })
        return status
    } catch (e) {

    }
}

export async function getOrderStatusById(id: string) {
    try {
        const status = await prisma.order_status.findUnique({
            where: { id }
        })
        return status
    } catch (e) {

    }
}

export async function getAllOrderStatus() {
    try {
        const status = await prisma
            .order_status.findMany({})
        return status
    } catch (e) {

    }
}

export async function updateOrderStatus(
    id: string,
    payload: string
) {
    try {
        const status = await prisma
            .order_status.update({
                where: { id },
                data: payload
            })
        return status
    } catch (e) {

    }
}

export async function deleteOrderStatus(id: string) {
    try {
        const status = await prisma
            .order_status.delete({
                where: { id }
            })
        return status
    } catch (e) {

    }
}