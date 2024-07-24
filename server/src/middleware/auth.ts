import jwt from "jsonwebtoken";

const SECRET = "random";
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
      req.user = user;
      next();
    });
  } else {
    res.sendStatus(401);
  }
};

export { authenticateJwt, SECRET };
