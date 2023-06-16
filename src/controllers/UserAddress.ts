import { prisma } from "../server";
import { Request, Response } from "express";



export const addUserAddress = async(req:Request, res:Response)=>{
    const user = req?.user

    const {unit_number,street_address, city, region,postal_code, } = req.body

    const newAddress = await prisma.address.create({
        data:{
            unit_number,
            street_address,
            city,
            region,
            postal_code,
            countryId:"233"
        }
    })

    res.status(200).json(newAddress)
    console.log(user)
}