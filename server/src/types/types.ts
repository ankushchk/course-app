import { Request } from "express";

export interface AuthenticatedRequest extends Request {
  user?: any; // You can adjust the type according to your user object structure
}
