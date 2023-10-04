import { Request, Response } from "express";
import { TstatusPayload, statusParam } from "./status.types";
import {
    createOrderStatus,
    deleteOrderStatus,
    getOrderStatusById,
    updateOrderStatus
} from "./status.service";

export async function createOrderStatusHandler(
    req: Request<{}, {}, TstatusPayload>,
    res: Response
) {
    const status = await createOrderStatus(req.body.status)
    res.send(status)
}

export async function getOrderStatusByIdHandler(
    req: Request<statusParam>,
    res: Response
) {
    const status = await getOrderStatusById(req.params.id)
    res.send(status)
}

export async function updateOrderStatusHandler(
    req: Request<statusParam, {}, TstatusPayload>,
    res: Response
) {
    const status = await updateOrderStatus(
        req.params.id,
        req.body.status
    )
    res.send(status)
}

export async function deleteOrderStatusHandler(
    req: Request<statusParam>,
    res: Response
) {
    const status = await deleteOrderStatus(req.params.id)
    res.send(status)
}