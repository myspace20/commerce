import { Request, Response } from "express";
import {
    createProductItem,
    deleteProductItem,
    getProductItems,
    getProductItem,
    updateProductItem
} from "./productItem.service";
import { productItem } from "./productItem.types";



export async function createProductItemHandler(
    req: Request<{}, {}, productItem>,
    res: Response
) {
    try {
        const productItem = await createProductItem(req.body)
        return res.send(productItem)
    } catch (e) {

    }
}


export async function getProductItemsHandler(
    req: Request,
    res: Response
) {
    try {
        const productItem = await getProductItems()
        return res.send(productItem)
    } catch (error) {

    }
}

export async function getProductItemHandler(
    req: Request<{ id: string }, {}, {}>,
    res: Response
) {
    try {
        const productItem = await getProductItem(req.params.id)
        return res.send(productItem)
    } catch (e) {

    }
}

export async function updateProductItemHandler(
    req: Request<{ id: string }, {}, Partial<productItem>>,
    res: Response
) {
    try {
        const product = await updateProductItem(req.params.id, req.body)
        return res.send(product)
    } catch (e) {

    }
}

export async function deleteProductItemHandler(
    req: Request<{ id: string }, {}, {}>,
    res: Response
) {
    try {
        const productItem = await deleteProductItem(req.params.id)
        return res.send(productItem)
    } catch (e) {

    }
}

