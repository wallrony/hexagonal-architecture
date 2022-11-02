import Food from "../domain/models/Food";
import IFoodService from "../interfaces/services/IFoodService";

class FoodService extends IFoodService {
  fetch(): Promise<Food[]> {
    return this.adapter.fetch();
  }
  create(food: Food): Promise<boolean> {
    return this.adapter.create(food);
  }
  update(food: Food): Promise<boolean> {
    return this.adapter.update(food);
  }
  delete(foodId: number): Promise<boolean> {
    return this.adapter.delete(foodId);
  }
}

export default FoodService;
