import { NextFunction, Request, Response } from "express";
import { get } from "lodash";
import { verifyJWT } from "../utils/jwt.utils";
import { reIssueAccessToken } from "../modules/session/session.service";
import ApiError from "../utils/error";

export async function userAuth(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const {refreshToken, accessToken} = req.cookies;


    if (!accessToken) {
      return next();
    }

    const { decoded, expired } = verifyJWT(
      accessToken,
      process.env.SECRET as string
    );

    console.log("decoded", decoded, "expired", expired);

    if (decoded) {
      res.locals.user = decoded;
      return next();
    }

    if (expired && refreshToken) {
      const newAccessToken = await reIssueAccessToken(refreshToken as string);
      console.log("access", newAccessToken);
      if (newAccessToken) {
        res.setHeader("x-access-token", newAccessToken);
      }

      const result = verifyJWT(
        newAccessToken as string,
        process.env.SECRET as string
      );
      console.log(result);

      res.locals.user = result.decoded;
      return next();
    }

    return next();
  } catch (e) {
    throw new ApiError(400, "Something went wrong");
  }
}
