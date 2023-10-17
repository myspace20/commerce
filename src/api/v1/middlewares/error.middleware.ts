import { Request, Response, NextFunction } from "express";
import HttpException from "../exceptions/error.handler";
import { ValidationError } from "yup";


export const errorMiddleware = async(error: HttpException, req:Request, res:Response, next:NextFunction) =>{
    
    const status = error.status 
    const message = error.message || 'something went wrong'

    if(error instanceof ValidationError){
        res.status(status).json({error:error.errors})
    }

    res.status(status).json({error:message,})

    return next(error)
}