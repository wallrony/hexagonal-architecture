import express from "express";
import IFoodService from "../../../core/interfaces/services/IFoodService";
import { FoodHandler } from "../handlers/foods";

export function loadRoutes(service: IFoodService) {
  const router = express.Router();
  const handler = new FoodHandler(service);
  router.get("/", handler.getAll);
  return router;
}
