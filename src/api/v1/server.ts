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
import sessionRouter from '../v2/modules/session/session.routes'
import userRouter from '../v2/modules/user/user.routes'
import cartRouter from '../v2/modules/cart/cart.routes'
import productRouter from '../v2/modules/products/product.routes'
import { userAuth } from '../v2/middlewares/auth.middleware'
import metricsApp from '../v2/metrics/metrics'
import startMetricsServer from '../v2/metrics/server'
import cookieParser from 'cookie-parser'
import userAddressRouter from '../v2/modules/user/address/address.routes'
import { logger } from '../v2/utils/logger'
import reponseTime from "response-time"
 

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

app.use(cors())
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(errorMiddleware);

app.use(reponseTime())



// app.use(errorMiddleware)







app.use(userAuth)

// app.use("/user", customer_route)
// app.use(admin_route)

app.use(userRouter)

app.use(sessionRouter)

app.use(cartRouter)

app.use(productRouter)

app.use(userAddressRouter)









async function main() {
    app.listen(3500, () => {
        logger.info("Server started on port 3500")
    })
    startMetricsServer(metricsApp)
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
