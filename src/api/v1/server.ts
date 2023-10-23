import express, { Application, Response, Request } from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import { PrismaClient } from "@prisma/client";
import { errorMiddleware } from "./middlewares/error.middleware";
import sessionRouter from "../v2/modules/session/session.routes";
import userRouter from "../v2/modules/user/user.routes";
import cartRouter from "../v2/modules/cart/cart.routes";
import productRouter from "../v2/modules/products/product.routes";
import { userAuth } from "../v2/middlewares/auth.middleware";
import cookieParser from "cookie-parser";
import userAddressRouter from "../v2/modules/user/address/address.routes";
import { logger } from "../v2/utils/logger";
import reponseTime from "response-time";
import { metricsApp, requestHistogram } from "../v2/metrics/metrics";

export const prisma = new PrismaClient();

// const prod = {
//     categoryId:"",
//     name:"nsjns",
//     description:"sritn",
//     productImage:"string"
// }

// const validate = productSchema.validate(prod)

// console.log(validate)

const app: Application = express();

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(errorMiddleware);

app.use(
  reponseTime((req: Request, res: Response, time: number) => {
    if (req?.route?.path) {
      requestHistogram
        .labels(req.method, req.route.path, res.statusCode.toString())
        .observe(time * 1000);
    }
  })
);

// app.use(errorMiddleware)

app.use(userAuth);

app.use(userRouter);

app.use(sessionRouter);

app.use(cartRouter);

app.use(productRouter);

app.use(userAddressRouter);

async function main() {
  app.listen(8000, "localhost", () => {
    logger.info("Server started on port 3500");
  });
  metricsApp.listen(9000, "localhost", () => {
    console.log("Metrics");
  });
}

main()
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  })
  .then(async () => {
    await prisma.$disconnect();
  });
