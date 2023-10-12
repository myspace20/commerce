import { prisma } from "../../../v1/server";
import { TcountryPayload } from "./country.types";



export async function addCountry(payload:TcountryPayload){
    try {
        const country = await prisma.country.create({
            data:{country_name:payload.name}
        })
        return country
    } catch (e) {
        
    }

}


export async function getCountryById(id:string){
    try {
        const country = await prisma.country.findUnique({
            where:{id}
        })
        return country
    } catch (e) {
        
    }
}

export async function getCountries(){
    try {
        const country = await prisma.country.findMany({})
        return country
    } catch (e) {
        
    }
}


export async function updateCountry(id:string, payload:TcountryPayload){
    try {
        const updates: Partial<TcountryPayload> = {}
        if(payload.name){
            updates.name = payload.name
        }
        if(Object.keys(updates).length === 0){
            throw Error()
        }
        const country = await prisma.country.update({
            where:{id},
            data:updates
        })
    } catch (e) {
        
    }
}


export async function deleteCountry(id:string){
    try {
        const country = await prisma.country.delete({
            where:{id}
        })
        return country
    } catch (e) {
        
    }
}