import { Request, Response } from "express";
import IFoodService from "../../../core/interfaces/services/IFoodService";

class FoodHandler {
  constructor(private readonly service: IFoodService) {
    this.getAll = this.getAll.bind(this);
  }

  async getAll(_: Request, res: Response) {
    const foods = await this.service.fetch();
    return res.send(foods.map((food) => food.toJSON()));
  }
}

export { FoodHandler };
