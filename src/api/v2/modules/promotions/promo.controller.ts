import { Request, Response } from "express";
import { TpromoPayload } from "./promo.types";
import {
    createPromotion,
    deletePromotion,
    getPromotion,
    getPromotions,
    updatePromotion
} from "./promo.service";


export async function createPromotionHandler(
    req: Request<{ id: string }, {}, TpromoPayload>,
    res: Response
) {
    const promotion = await createPromotion(req.params.id, req.body)
    res.send(promotion)
}

export async function getPromotionHandler(
    req: Request<{ id: string }>,
    res: Response
) {
    try {
        const promotion = await getPromotion(req.params.id)
        res.send(promotion)
    } catch (e) {

    }
}

export async function getPromotionsHandler(
    req: Request,
    res: Response
) {
    const promotion = await getPromotions()
    res.send(promotion)
}


export async function updatePromotionHandler(
    req: Request<{ id: string }, {}, TpromoPayload>,
    res: Response
) {
    const promotion = await updatePromotion(req.params.id, req.body)
    res.send(promotion)
}


export async function deletePromotionHandler(
    req: Request<{ id: string }>,
    res: Response
) {
    const promotion = await deletePromotion(req.params.id)
    res.send(promotion)
}