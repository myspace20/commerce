import { prisma } from "../../../v1/server";
import { TshippingMethodPayload } from "./shippingMethod.types";




export async function createShippingMethod(
    payload: TshippingMethodPayload
) {

    try {
        const shippingMethod = await prisma.shipping_method.create({
            data: {
                name: payload.name,
                price: payload.price
            }
        })
        return shippingMethod
    } catch (e) {

    }
}

export async function getShippingMethod(id:string){
    try {
        const shippingMethod = await prisma.shipping_method.findUnique({
            where:{id}
        })
        return shippingMethod
    } catch (e) {
        
    }
}

export async function getShippingMethods(){
    try {
        const shippingMethod = await prisma.shipping_method.findMany({})
        return shippingMethod
    } catch (e) {
        
    }
}


export async function updateShippingMethod(
    id:string,
    payload:TshippingMethodPayload
){
    try {
        const updates :Partial<TshippingMethodPayload>  = {}
        if(payload.name){
            updates.name = payload.name
        }
        if(payload.price){
            updates.price = payload.price
        }

        if(Object.keys(updates).length === 0){
            throw Error()
        }
        const shippingMethod = await prisma.shipping_method.update({
            where:{id},
            data:updates
        })
        return shippingMethod
    } catch (e) {
        
    }
}

export async function deleteShippingMethod(id:string){
    try {
        const shippingMethod = await prisma.shipping_method.delete({
            where:{id}
        })
        return shippingMethod
    } catch (e) {
        
    }
}