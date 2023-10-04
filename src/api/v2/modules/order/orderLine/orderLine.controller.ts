import { Request, Response } from "express";
import { deleteLineItem } from "./orderLine.service";


export async function deleteLineItemHandler(
    req:Request<{id:string}>,
    res:Response
){
    const lineItem = await deleteLineItem(req.params.id)
    res.send(lineItem)
}