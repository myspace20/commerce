import { prisma } from "../../../v1/server";
import { TprodConfigPayload } from "./prodConfig.types";



export async function addProdConfig(payload: TprodConfigPayload) {
    try {
        const prodConfig = await prisma.product_configuration.create({
            data: {
                product_item_id: payload.prodItemId,
                variation_option_id: payload.variantOptionId
            }
        })
        return prodConfig
    } catch (e) {

    }
}

export async function getProductConfig(payload: TprodConfigPayload) {
    try {
        const prodConfig = await prisma.product_configuration.findUnique({
            where: {
                product_item_id_variation_option_id: {
                    product_item_id: payload.prodItemId,
                    variation_option_id: payload.variantOptionId
                }
            },
            include: {
                product_items: true,
                variation_options: true
            }
        })
        return prodConfig
    } catch (e) {

    }
}

export async function getProductConfigs() {
    try {
        const prodConfig = await prisma.product_configuration.findMany({
            skip:1,
            take:10,
            include: {
                product_items: true,
                variation_options: true
            }
        })
        return prodConfig
    } catch (e) {

    }
}

export async function updatedProductConfig(
    id: string,
    payload: TprodConfigPayload
) {
    try {
        const updates: Partial<TprodConfigPayload> = {}
        if(payload.prodItemId){
            updates.prodItemId = payload.prodItemId
        }
        if(payload.variantOptionId){
            updates.variantOptionId = payload.variantOptionId
        }
        if(Object.keys(updates).length < 2){
            throw new Error()
        }
        const prodConfig = await prisma.product_item.update({
            where:{id},
            data:{
                variation_options:{
                    connect:{product_item_id_variation_option_id:{
                        variation_option_id:payload.variantOptionId,
                        product_item_id:payload.prodItemId
                    }}
                }
            }
        })
        return prodConfig
    } catch (e) {
        
    }
}

export async function deleteProductConfig(payload:TprodConfigPayload){
    try {
        const prodConfig = await prisma.product_configuration.delete({
            where:{
                product_item_id_variation_option_id:{
                    variation_option_id:payload.variantOptionId,
                    product_item_id:payload.prodItemId
                }
            }
        })
        return prodConfig
    } catch (e) {
        
    }
}