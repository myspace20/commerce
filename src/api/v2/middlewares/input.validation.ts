import { Request, Response, NextFunction } from "express";
import { Schema } from "yup";

export const inputValidation =
  (schema: Schema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    const payload = req.body;
    const params = req.params;
    const query = req.query;
    const locals = res.locals

    try {
      await schema.validate(payload);
      await schema.validate(params)
      await schema.validate(query)
      await schema.validate(locals)

      next();
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  };
