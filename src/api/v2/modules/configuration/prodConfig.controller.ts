import { Request, Response } from "express";
import { TprodConfigPayload } from "./prodConfig.types";
import { addProdConfig, deleteProductConfig, getProductConfig, getProductConfigs, updatedProductConfig } from "./prodConfig.service";


export async function addProdConfigHamdler(
    req:Request<{},{},TprodConfigPayload>,
    res:Response
){
    const config = await addProdConfig(req.body)
    res.send(config)
}


export async function getProductConfigHandler(
    req:Request<{},{},TprodConfigPayload>,
    res:Response
) {
    const config = await getProductConfig(req.body)
    res.send(config)
}


export async function getProductConfigsHandler(
    req:Request,
    res:Response
){
    const config = await getProductConfigs()
    res.send(config)
}

export async function updatedProductConfigHandler(
    req:Request<{id:string},{},TprodConfigPayload>,
    res:Response
){
    const config = await updatedProductConfig(req.params.id,req.body)
    res.send(config)
}

export async function deleteProductConfigHandler(
    req:Request<{},{},TprodConfigPayload>,
    res:Response
){
    const config = await deleteProductConfig(req.body)
    res.send(config)
}