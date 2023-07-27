import { Request, Response, NextFunction } from "express";
import HttpException from "../exceptions/error.handler";


export const errorMiddleware = async(error: HttpException, req:Request, res:Response, next:NextFunction) =>{
    
    const status = error.status || 505
    const message = error.message || 'something went wrong'

    res.status(status).json({error:message})

    next(error)
}