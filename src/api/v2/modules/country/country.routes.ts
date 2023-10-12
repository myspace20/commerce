import { Router } from "express";
import {
    addCountryHandler,
    deleteCountryHandler,
    getCountriesHandler,
    getCountryByIdHandler,
    updateCountryHandler
} from "./country.controller";

const countryRouter = Router()


countryRouter.post("/country/add", addCountryHandler)

countryRouter.get("/country/get/:id", getCountryByIdHandler)

countryRouter.get("/country/get/all", getCountriesHandler)

countryRouter.put("/country/update/:id", updateCountryHandler)

countryRouter.delete("/country/remove/:id", deleteCountryHandler)

export default countryRouter