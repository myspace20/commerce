import { Request, Response, NextFunction } from "express";
import { Schema } from "yup";

export const inputValidation =
  (schema: Schema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    const payload = req.body;
    const params = req.params;
    const query = req.query;

    try {
      await schema.validate({
        payload,
        params,
        query,
      });
      next();
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  };
