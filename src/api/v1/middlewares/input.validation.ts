import { Request, Response, NextFunction } from "express";
import { Schema } from "yup";


export const inputValidation = (schema:Schema) => async (req:Request, res:Response, next:NextFunction) =>{

    const payload = req.body

    try {

        await schema.validate(payload)

        next()

    } catch (error:any) {
        return res.status(400).json({error:error.errors[0]})
    }
}