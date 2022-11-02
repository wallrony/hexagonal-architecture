import Demand from "../domain/models/Demand";
import IDemandService from "../interfaces/services/IDemandService";

class DemandService extends IDemandService {
  fetch(): Promise<Demand[]> {
    return this.adapter.fetch();
  }
  fetchByAccount(accountId: number): Promise<Demand[]> {
    return this.adapter.fetchByAccount(accountId);
  }
  async create(demand: Demand): Promise<boolean> {
    const demandId = await this.adapter.create(demand);
    for (const foodId of demand.foodIds) {
      await this.demandFoodAdapter.create(demandId, foodId);
    }
    return true;
  }

  update(demand: Demand): Promise<boolean> {
    return this.adapter.update(demand);
  }
  delete(demandId: number): Promise<boolean> {
    return this.adapter.delete(demandId);
  }
}

export default DemandService;
