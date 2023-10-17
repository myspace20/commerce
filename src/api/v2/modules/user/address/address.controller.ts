import { Request, Response } from "express"
import { TaddressPayload, addressParam } from "./address.types"
import {
    addUserAddress,
    deleteUserAddress,
    getUserAddressHistory,
    updateUserAddress
} from "./address.service"



export async function addUserAddressHandler(
    req: Request<addressParam, {}, TaddressPayload>,
    res: Response
) {
    const address = await addUserAddress(req.params.id, req.body)
    res.send(address)
}


export async function updateUserAddressHandler(
    req: Request<addressParam, {}, TaddressPayload>,
    res: Response
) {
    const address = await updateUserAddress(req.params.id,req.body)
    res.send(address)
}

export async function getUserAddressHistoryHandler(
    req: Request,
    res: Response
) {
    const userId = "67b25de5-ac78-40ba-98ff-541ac4970137"
    const address = await getUserAddressHistory(userId)
    res.send(address)
}

export async function deleteUserAddressHandler(
    req: Request<addressParam>,
    res: Response
) {
    const userId = ""
    const address = await deleteUserAddress(req.params.id, userId)
    res.send(address)

}