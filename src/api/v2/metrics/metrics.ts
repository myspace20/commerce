import promClient,{ collectDefaultMetrics, Registry, Histogram } from "prom-client";
import express, { Application, Response, Request } from "express";

const metricsApp: Application = express();

const register = new Registry();


// register.setDefaultLabels({
//   app: "commerce metrics",
// });

export const requestTimer = new Histogram({
    name:"commerce",
    help:"Duration of Http Request",
    labelNames:["method", "route", "code"],
    buckets : [0.1, 5, 15, 50, 100, 200,300, 400,500,1000]
})

async function metricsHandler(req: Request, res: Response) {
    // collectDefaultMetrics()
    console.log("Live")
//   const metrics = await register.metrics().;
  res.setHeader("Content-Type", register.contentType);
  res.send("Hello");
}

metricsApp.get("/metrics", metricsHandler);

export default metricsApp
