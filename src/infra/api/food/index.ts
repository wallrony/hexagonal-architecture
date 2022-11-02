import Food from "../../../core/domain/models/Food";
import { DTO } from "../../../core/domain/types/DTO";
import FoodAdapter from "../../../core/interfaces/adapter/FoodAdapter";
import { APIClient } from "../clients/APIClient";

class FoodAPI extends FoodAdapter {
  async fetch(): Promise<Food[]> {
    const response = await APIClient.get<DTO[]>("/foods");
    return response.data.map(Food.fromJSON);
  }

  async create(food: Food): Promise<boolean> {
    await APIClient.post("/foods", food.toJSON());
    return true;
  }

  update(food: Food): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  delete(foodId: number): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
}

export default FoodAPI;
