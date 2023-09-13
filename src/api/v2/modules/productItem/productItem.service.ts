import { prisma } from "../../../v1/server";
import { productItem } from "./productItem.types";


export async function createProductItem(payload: productItem) {
    try {
        const product = await prisma
            .product_item.create({
                data: {
                    SKU: payload.SKU,
                    qty_in_stock: payload.qtyInStock,
                    product_image: payload.productImage,
                    price: payload.price,
                    product: {
                        connect: { id: payload.productId }
                    }
                }
            })
        return product
    } catch (e) {

    }
}


export async function getProductItems() {
    try {
        const products = await prisma
            .product_item.findMany({})
        return products
    } catch (e) {

    }
}


export async function getProductItem(id: string) {
    try {
        const product = await prisma
            .product_item.findUnique({ where: { id } })
        return product
    } catch (e) {

    }
}


export async function updateProductItem(id: string, payload: Partial<productItem>) {
    const updates: Partial<productItem> = {}

    if (payload.productId) {
        updates.productId = payload.productId
    }
    if (payload.SKU) {
        updates.SKU = payload.SKU
    }
    if (payload.qtyInStock) {
        updates.qtyInStock = payload.qtyInStock
    }
    if (payload.productImage) {
        updates.productImage = payload.productImage
    }
    try {
        if (Object.keys(updates).length < 1
        ) throw Error("input is required")
        
        const product = await prisma
            .product_item.update({
                where: { id },
                data: updates
            })
        return product

    } catch (e) {

    }
}

export async function deleteProductItem(id: string) {
    try {
        const product = await prisma.product_item.delete({
            where: { id }
        })
        return product
    } catch (e) {

    }
}