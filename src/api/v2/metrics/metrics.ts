import { Registry, Histogram, collectDefaultMetrics } from "prom-client";
import express, { Application, Response, Request } from "express";

export const metricsApp: Application = express();

const register = new Registry();
register.setDefaultLabels({
  app: "commerce",
});

export const requestHistogram = new Histogram({
  name: "http_request_duration_ms",
  help: "Duration of HTTP requests in ms",
  labelNames: ["method", "route", "code"],
  // buckets for response time from 0.1ms to 1s
  buckets: [0.1, 5, 15, 50, 100, 200, 300, 400, 500, 1000],
});

export const databaseCallsHistogram = new Histogram({
  name:"Database_call_response",
  help:"Database response in ms",
  labelNames:["operation", "success"]
})

collectDefaultMetrics({register})

metricsApp.get("/metrics", async (req: Request, res: Response) => {
  res.setHeader("Content-Type", register.contentType);
  const metrics = await register.metrics()
  res.send(metrics)
});
