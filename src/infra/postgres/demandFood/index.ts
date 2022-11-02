import DemandFoodAdapter from "../../../core/interfaces/adapter/DemandFoodAdapter";
import BasePostgresRepository from "../BasePostgresRepository";

class DemandFoodPostgresRepository
  extends BasePostgresRepository
  implements DemandFoodAdapter
{
  async create(demandId: number, foodId: number): Promise<boolean> {
    const result = await this.query(
      "insert into demand_foods (demand_id, food_id) values ($1, $2);",
      [demandId, foodId]
    );
    return result.rowCount > 0;
  }
}

export default DemandFoodPostgresRepository;
