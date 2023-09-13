import { Request, Response } from "express";
import {
    createProduct,
    deleteProduct,
    getProduct,
    getProducts,
    updateProduct
} from "./product.service";
import { product } from "./product.types";



export async function createProductHandler(
    req: Request<{}, {}, product>,
    res: Response
) {
    try {
        const product = await createProduct(req.body)
        return res.send(product)
    } catch (e) {

    }
}


export async function getProductsHandler(
    req: Request,
    res: Response
) {
    try {
        const products = await getProducts()
        return res.send(products)
    } catch (error) {

    }
}

export async function getProductHandler(
    req: Request<{ id: string }, {}, {}>,
    res: Response
) {
    try {
        const product = await getProduct(req.params.id)
        return res.send(product)
    } catch (e) {

    }
}

export async function updateProductHandler(
    req: Request<{ id: string }, {}, Partial<product>>,
    res: Response
) {
    try {
        const product = await updateProduct(req.params.id, req.body)
        return res.send(product)
    } catch (e) {

    }
}

export async function deleteProductHandler(
    req: Request<{ id: string }, {}, {}>,
    res: Response
) {
    try {
        const product = await deleteProduct(req.params.id)
        return res.send(product)
    } catch (e) {

    }
}