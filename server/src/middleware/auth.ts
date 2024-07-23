import * as dotenv from "dotenv";
dotenv.config();
import jwt from "jsonwebtoken";
import config from "../config";

const SECRET = config.SECRET_KEY; // This should be in an environment variable in a real application
import { NextFunction, Request, Response } from "express";
import { AuthenticatedRequest } from "../types/types";

const authenticateJwt = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, SECRET, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }
      req.user = user; // Set the user object directly
      next();
    });
  } else {
    res.sendStatus(401);
  }
};

export { authenticateJwt, SECRET };
