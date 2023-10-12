import { Router } from "express";
import { createSessionHandler, findAllSessionsHandler } from "./session.controller";

const sessionRouter = Router()


sessionRouter.post("/user/login",createSessionHandler)
sessionRouter.get("/user/session/get/all", findAllSessionsHandler)



export default sessionRouter