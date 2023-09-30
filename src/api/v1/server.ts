import express, { Application, Response, Request } from 'express'
import dotenv from "dotenv"
dotenv.config() 
import config from "config"
import cors from 'cors'
import { PrismaClient } from '@prisma/client'
import customer_route from './routes/customer'
import admin_route from './routes/admin'
import { authorization } from './middlewares/Authorization'
import { errorMiddleware } from './middlewares/error.middleware'
import { inputValidation } from './middlewares/input.validation'

 

export const prisma = new PrismaClient()

// const prod = {
//     categoryId:"",
//     name:"nsjns",
//     description:"sritn",
//     productImage:"string"
// }


// const validate = productSchema.validate(prod)

// console.log(validate)


const app: Application = express()

// app.use(errorMiddleware)

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))



app.use("/user", customer_route)
app.use(admin_route)

// app.use(authorization)




async function main() {
    app.listen(3500, () => {
        console.log("Ready")
    })
}

main()
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
    .then(async () => {
        await prisma.$disconnect()
    })
