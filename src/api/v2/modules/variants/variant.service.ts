import { prisma } from "../../../v1/server";
import { TvariantPayload } from "./variant.types";


export async function createVariant(payload: TvariantPayload) {
    try {
        const variant = await prisma.variation.create({
            data: {
                name: payload.name,
                category_id: payload.categoryId
            }
        })
        return variant
    } catch (e) {

    }
}


export async function getVariant(id: string) {
    try {
        const variant = await prisma.variation.findUnique({
            where: { id }
        })
        return variant
    } catch (e) {

    }
}


export async function getVariants() {
    try {
        const variant = await prisma.variation.findMany({})
        return variant
    } catch (e) {

    }
}

export async function updateVariant(
    id: string,
    payload: TvariantPayload
) {
    try {
        const updates: Partial<TvariantPayload> = {}
        if(payload.name){
            updates.name = payload.name
        }
        if(payload.categoryId){
            updates.categoryId = payload.categoryId
        }
        if(Object.keys(updates).length === 0){
            throw Error()
        }
        const variant = await prisma.variation.update({
            where:{id},
            data:updates
        })
        return variant
    } catch (e) {
        
    }
}

export async function deleteVariant(id:string){
    try {
        const variant = await prisma.variation.delete({
            where:{id}
        })
        return variant
    } catch (e) {
        
    }
}