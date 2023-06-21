import { prisma } from "../server";
import { Request, Response } from "express";

export const addCountry = async (req:Request, res:Response) =>{
    const user = req.user
    const {country_name} = req.body

    // const addCountry = await prisma.country.create({
    //     data:{
    //         country_name
    //     }
    // })


  
}