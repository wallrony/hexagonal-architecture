import Food from "../../../core/domain/models/Food";
import FoodAdapter from "../../../core/interfaces/adapter/FoodAdapter";
import database from "../../../../database.json";

class FoodFileSys extends FoodAdapter {
  fetch(): Promise<Food[]> {
    return Promise.resolve(database["foods"].map(Food.fromJSON));
  }
  create(food: Food): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  update(food: Food): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  delete(foodId: number): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
}

export default FoodFileSys;
