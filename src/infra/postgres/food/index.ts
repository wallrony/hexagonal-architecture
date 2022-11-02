import Food from "../../../core/domain/models/Food";
import FoodAdapter from "../../../core/interfaces/adapter/FoodAdapter";
import BasePostgresRepository from "../BasePostgresRepository";

class FoodPostgresRepository
  extends BasePostgresRepository
  implements FoodAdapter
{
  async fetch(): Promise<Food[]> {
    const result = await this.query("select * from foods;");
    return result.rows.map(Food.fromJSON);
  }

  async create(food: Food): Promise<boolean> {
    const result = await this.query(
      "insert into foods (name, price) values ($1, $2);",
      [food.name, food.price]
    );
    return result.rowCount > 0;
  }

  async update(food: Food): Promise<boolean> {
    const result = await this.query(
      "update foods set name=$1, price=$2 WHERE id=$3;",
      [food.name, food.price, food.id]
    );
    return result.rowCount > 0;
  }

  async delete(foodId: number): Promise<boolean> {
    const result = await this.query("delete from foods WHERE id=$1;", [foodId]);
    return result.rowCount > 0;
  }
}

export default FoodPostgresRepository;
