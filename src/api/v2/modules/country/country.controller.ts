import { Request, Response } from "express";
import { TcountryPayload } from "./country.types";
import { addCountry, deleteCountry, getCountries, getCountryById, updateCountry } from "./country.service";


export async function addCountryHandler(
    req:Request<{}, {}, TcountryPayload>,
    res:Response
){
    const country = await addCountry(req.body)
    res.send(country)
}


export async function getCountryByIdHandler(
    req:Request<{id:string}>,
    res:Response
){
    const country = await getCountryById(req.params.id)
    res.send(country)
}


export async function getCountriesHandler(
    req:Request,
    res:Response
){
    const country = await getCountries()
    res.send(country)
}

export async function updateCountryHandler(
    req:Request<{id:string}, {}, TcountryPayload>,
    res:Response
){
    const country = await updateCountry(req.params.id, req.body)
    res.send(country)
}

export async function deleteCountryHandler(
    req:Request<{id:string}>,
    res:Response
){
    const country = await deleteCountry(req.params.id)
    res.send(country)
}