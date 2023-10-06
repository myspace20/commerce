import { Request, Response } from "express";
import { TvariantPayload } from "./variant.types";
import {
    createVariant,
    deleteVariant,
    getVariant,
    getVariants,
    updateVariant
} from "./variant.service";


export async function createVariantHandler(
    req: Request<{}, {}, TvariantPayload>,
    res: Response
) {
    const variant = await createVariant(req.body)
    res.send(variant)
}


export async function getVariantHandler(
    req: Request<{ id: string }>,
    res: Response
) {
    const variant = await getVariant(req.params.id)
    res.send(variant)
}


export async function getVariantsHandler(
    req: Request,
    res: Response
) {
    const variant = await getVariants()
    res.send(variant)
}

export async function updateVariantHandler(
    req: Request<{ id: string }, {}, TvariantPayload>,
    res: Response
) {
    const variant = await updateVariant(req.params.id, req.body)
    res.send(variant)
}

export async function deleteVariantHandler(
    req: Request<{ id: string }>,
    res: Response
) {
    const variant = await deleteVariant(req.params.id)
    res.send(variant)
}