import express, { Application, Response, Request } from 'express'
import cors from 'cors'
import { PrismaClient } from '@prisma/client'
import userRoute from './routes/userRoutes'


export const prisma = new PrismaClient()



const app: Application = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(userRoute)



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
