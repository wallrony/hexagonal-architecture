import DemandFoodAdapter from "../../../core/interfaces/adapter/DemandFoodAdapter";

class DemandFoodFileSys extends DemandFoodAdapter {
  create(demandId: number, foodId: number): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
}

export default DemandFoodFileSys;
