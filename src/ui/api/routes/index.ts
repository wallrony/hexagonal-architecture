import express from "express";
import APIDIContainer from "../../../dicontainer/api";
import { loadRoutes as loadAccountRoutes } from "./accounts";
import { loadRoutes as loadFoodRoutes } from "./foods";
import { loadRoutes as loadDemandRoutes } from "./demands";

export function loadRoutes() {
  const dicontainer = new APIDIContainer();
  const accountsService = dicontainer.getAccountService();
  const foodsService = dicontainer.getFoodService();
  const demandsService = dicontainer.getDemandService();

  const router = express.Router();
  router.use("/accounts", loadAccountRoutes(accountsService));
  router.use("/foods", loadFoodRoutes(foodsService));
  router.use("/demands", loadDemandRoutes(demandsService));
  return router;
}
