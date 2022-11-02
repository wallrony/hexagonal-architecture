import Food from "../../domain/models/Food";

abstract class FoodAdapter {
  abstract fetch(): Promise<Food[]>;
  abstract create(food: Food): Promise<boolean>;
  abstract update(food: Food): Promise<boolean>;
  abstract delete(foodId: number): Promise<boolean>;
}

export default FoodAdapter;
