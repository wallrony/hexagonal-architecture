import DemandFoodAdapter from "../../../core/interfaces/adapter/DemandFoodAdapter";
import { APIClient } from "../clients/APIClient";

class DemandFoodAPI extends DemandFoodAdapter {
  async create(demandId: number, foodId: number): Promise<boolean> {
    await APIClient.post("/demand_foods", { demandId, foodId });
    return true;
  }
}

export default DemandFoodAPI;
