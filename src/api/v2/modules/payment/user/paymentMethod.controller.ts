import { Request, Response } from "express";
import { TpayMethod, TpayMethodParam } from "./paymentMethod.types";
import { addPaymentMethod, deleteUserPaymentmethod, getUserPaymentmethod, getUserPaymentmethods, updateUserPaymentMethod } from "./paymentMethod.service";


export async function addPaymentMethodHandler(
    req:Request<{}, {}, TpayMethod>,
    res:Response
){
    const userId = ""
    const userPaymentMethod = await addPaymentMethod(userId,req.body)
    res.send(userPaymentMethod)
}

export async function getUserPaymentmethodHandler(
    req:Request<TpayMethodParam>,
    res:Response
){
    const userPaymentMethod = await getUserPaymentmethod(req.params)
    res.send(userPaymentMethod)
}

export async function getUserPaymentmethodsHandler(
    req:Request,
    res:Response
){
    const userId = ''
    const userPaymentMethod = await getUserPaymentmethods(userId)
    res.send(userPaymentMethod)
}

export async function updateUserPaymentMethodHandler(
    req:Request<{id:string}, {}, TpayMethod>,
    res:Response 
){

    const userPaymentMethod = await updateUserPaymentMethod(req.params.id, req.body)
    res.send(userPaymentMethod)
}

export async function deleteUserPaymentmethodHandler(
    req:Request<TpayMethodParam>,
    res:Response
){
    const userPaymentMethod = await deleteUserPaymentmethod(req.params.id)
    res.send(userPaymentMethod)
}

