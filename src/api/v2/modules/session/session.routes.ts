import { Router } from "express";
import cookieParser from "cookie-parser";
import {
  createSessionHandler,
  deleteSessionHandler,
  findAllSessionsHandler,
} from "./session.controller";
import catchAsync from "../../utils/catchAsync";
import { inputValidation } from "../../middlewares/input.validation";
import { credentialSchema } from "../user/user.schema";

const sessionRouter = Router();

sessionRouter.post(
  "/user/login",
  // inputValidation(credentialSchema),
  catchAsync(createSessionHandler)
);

sessionRouter.delete("/user/logout", catchAsync(deleteSessionHandler));
sessionRouter.get("/user/session/get/all", findAllSessionsHandler);

export default sessionRouter;
