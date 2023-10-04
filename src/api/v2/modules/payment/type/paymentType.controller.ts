import { Request, Response } from 'express'
import { TpaymentType, TpaymentTypeParams } from './paymentType.types';
import { createPaymentType, deletePaymentType, getAllPaymentTypes, getPaymentTypeById, getPaymentTypeByValue, updatePaymentType } from './paymentType.service';


export async function createPaymentTypeHandler(
    req: Request<{}, {}, TpaymentType>,
    res: Response
) {
    const paymentType = await createPaymentType(req.body)
    res.send(paymentType)
}

export async function getAllPaymentTypesHandler(
    req: Request,
    res: Response
) {
    const paymentType = await getAllPaymentTypes()
    res.send(paymentType)
}


export async function getPaymentTypeByValueHandler(
    req: Request<{}, {}, TpaymentType>,
    res: Response
) {
    const paymentType = await getPaymentTypeByValue(req.body)
    res.send(paymentType)
}

export async function getPaymentTypeByIdHandler(
    req: Request<TpaymentTypeParams>,
    res: Response
) {
    const paymentType = await getPaymentTypeById(req.params)
    res.send(paymentType)
}

export async function updatePaymentTypeHandler(
    req: Request<TpaymentTypeParams, {}, TpaymentType>,
    res: Response
){
    const paymentType = await updatePaymentType(req.params, req.body)
    res.send(paymentType)
}

export async function deletePaymentTypeHandler(
    req: Request<TpaymentTypeParams>,
    res: Response
) {
    const paymentType = await deletePaymentType(req.params)
    res.send(paymentType)
}