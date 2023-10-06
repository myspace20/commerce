import { Request, Response } from "express";
import { ToptionPayload } from "./option.types";
import { createVariantOption, deleteVariantOption, getVariantOption, getVariantOptions, updateVariantOption } from "./option.service";


export async function createVariantOptionHandler(
    req: Request<{ id: string }, {}, ToptionPayload>,
    res: Response
) {
    const option = await createVariantOption(req.params.id, req.body)
    res.send(option)
}


export async function getVariantOptionHandler(
    req: Request<{ id: string }>,
    res: Response
) {
    const option = await getVariantOption(req.params.id)
    res.send(option)
}

export async function getVariantOptionsHandler(
    req: Request,
    res: Response
) {
    const option = await getVariantOptions()
    res.send(option)
}

export async function updateVariantOptionHandler(
    req: Request<{ id: string }, {}, ToptionPayload>,
    res: Response
) {
    const option = await updateVariantOption(req.params.id, req.body)
    res.send(option)
}

export async function deleteVariantOptionHandler(
    req: Request<{ id: string }>,
    res: Response
){
    const option = await deleteVariantOption(req.params.id)
    res.send(option)
}


