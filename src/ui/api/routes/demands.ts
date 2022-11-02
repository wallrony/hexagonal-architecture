import express from "express";
import IDemandService from "../../../core/interfaces/services/IDemandService";
import { DemandHandler } from "../handlers/demands";

export function loadRoutes(service: IDemandService) {
  const router = express.Router();
  const handler = new DemandHandler(service);
  router.get("/", handler.getAll);
  return router;
}
