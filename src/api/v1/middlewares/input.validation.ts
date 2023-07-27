import { Request, Response, NextFunction } from "express";
import { Schema } from "yup";


export const inputValidation = (schema:Schema) => async (req:Request, res:Response, next:NextFunction) =>{

    const payload = req.body

    try {

        await schema.validate(payload)

        return next()

    } catch (error) {
        
    }
}