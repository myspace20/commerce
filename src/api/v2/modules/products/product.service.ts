import { prisma } from "../../../v1/server";
import { product, productParams } from "./product.types";


export async function createProduct(payload: product) {
    try {
        const product = await prisma
            .product.create({
                data: {
                    name: payload.name,
                    product_category:{
                        connect:{id:payload.categoryId}
                    },
                    product_image: payload.productImage,
                    description: payload.description
                }
            })
        return product
    } catch (e) {

    }
}


export async function getProducts() {
    try {
        const products = await prisma
            .product.findMany({})
        return products
    } catch (e) {

    }
}


export async function getProduct(id: string) {
    try {
        const product = await prisma
            .product.findUnique({ where: { id } })
        return product
    } catch (e) {

    }
}


export async function updateProduct(id: string, payload: Partial<product>) {
    const updates: Partial<product> = {}

    if (payload.categoryId) {
        updates.categoryId = payload.categoryId
    }
    if (payload.name) {
        updates.name = payload.name
    }
    if (payload.description) {
        updates.description = payload.description
    }
    if (payload.productImage) {
        updates.productImage = payload.productImage
    }
    try {
        if (!updates.description
            && !updates.categoryId
            && !updates.name
            && !updates.productImage
        ) throw Error("input is required")

        const product = await prisma
            .product.update({
                where: { id },
                data: updates
            })
        return product

    } catch (e) {

    }
}

export async function deleteProduct(id: string) {
    try {
        const product = await prisma.product.delete({
            where:{id}
        })
        return product
    } catch (e) {
        
    }
}