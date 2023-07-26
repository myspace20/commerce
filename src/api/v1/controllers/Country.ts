import { prisma } from "../server";
import { Request, Response } from "express";




export const addCountry = async (req: Request, res: Response) => {

    const { country_name } = req.body

    const addedCountry  = await prisma.country.create({
        data: {
            country_name
        }
    })

    res.status(201).json(addedCountry)

}


export const updateCountry = async (req:Request, res:Response) =>{

    const data = req.body

    const updatedCountry =  await prisma.country.update({
        where:{
            id:""
        },
        data
    })

    res.status(200).json(updatedCountry)

}

export const deleteCountry = async(req:Request, res:Response)=>{

    const deletedCountry = await prisma.country.delete({
        where:{
            id:""
        }
    })

    res.status(200).json(deletedCountry)
       
    
}

export const getAllCountries = async (req:Request, res:Response) =>{
    
    const retrieveAllCountries = await prisma.country.findMany({})

    res.status(200).json(retrieveAllCountries)
}