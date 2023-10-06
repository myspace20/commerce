import { prisma } from "../server";
import { Request, Response } from "express";



export const addUserAddress = async (req: Request, res: Response) => {
    const user = req?.user

    const { unit_number, street_address, city, region, postal_code } = req.body

    const newAddress = await prisma.user.update({
        where: {
            id: user.id
        },
        data: {
            addresses: {
                create: [
                    { address: { create: { unit_number, street_address, city, region, postal_code, countryId: '307d334b-e707-40fa-b668-97a1728fc8b6' } } }
                ],
            },
        },
    })



    res.status(200).json(newAddress)
    // console.log(user)
}


export const deleteAddress = async (req: Request, res: Response) => {

    const user = req?.user

    const deletedAddress = await prisma.user_address_history.delete({
        where: {
            addressId_userId: {
                userId: "",
                addressId: ""
            }
        }
    })

    res.status(202).json(deletedAddress)
}


export const updateAddress = async (req: Request, res: Response) => {

    const user = req?.user

    const updatedAddress = await prisma.user_address_history.update({
        where: {
            addressId_userId: {
                userId: "",
                addressId: ""
            }
        },
        data:req.body
    })

    res.status(200).json(updatedAddress)

}

export const getAddressHistory = async(req:Request, res:Response) =>{
    
    const user = req?.user

    const userAddressHistory = await prisma.address.findMany({
        where:{
            user: {
                some: {
                  userId:user.id
                },
              },
        },
        
      })
      

    res.status(200).json(userAddressHistory)

}