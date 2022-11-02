import express from "express";
import IAccountService from "../../../core/interfaces/services/IAccountService";
import { AccountsHandler } from "../handlers/accounts";

export function loadRoutes(service: IAccountService) {
  const router = express.Router();
  const handler = new AccountsHandler(service);
  router.get("/", handler.getAll);
  return router;
}
