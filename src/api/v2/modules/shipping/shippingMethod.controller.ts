import { Request, Response } from "express";
import { TshippingMethodPayload } from "./shippingMethod.types";
import {
    createShippingMethod,
    deleteShippingMethod,
    getShippingMethod,
    getShippingMethods,
    updateShippingMethod
} from "./shippingMethod.service";


export async function createShippingMethodHandler(
    req: Request<{}, {}, TshippingMethodPayload>,
    res: Response
) {
    const shippingMethod = await createShippingMethod(req.body)
    res.send(shippingMethod)
}

export async function getShippingMethodHandler(
    req: Request<{ id: string }>,
    res: Response
) {
    const shippingMethod = await getShippingMethod(req.params.id)
    res.send(shippingMethod)
}

export async function getShippingMethodsHandler(
    req: Request,
    res: Response
) {
    const shippingMethod = await getShippingMethods()
    res.send(shippingMethod)
}

export async function updateShippingMethodHandler(
    req: Request<{ id: string }, {}, TshippingMethodPayload>,
    res: Response
) {
    const shippingMethod = await updateShippingMethod(req.params.id, req.body)
    res.send(shippingMethod)
}

export async function deleteShippingMethodHandler(
    req: Request<{ id: string }>,
    res: Response
) {
    const shippingMethod = await deleteShippingMethod(req.params.id)
    res.send(shippingMethod)
}