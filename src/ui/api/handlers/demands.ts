import { Request, Response } from "express";
import IDemandService from "../../../core/interfaces/services/IDemandService";

class DemandHandler {
  constructor(private readonly service: IDemandService) {
    this.getAll = this.getAll.bind(this);
  }

  async getAll(_: Request, res: Response) {
    const demands = await this.service.fetch();
    return res.send(demands.map((demand) => demand.toJSON()));
  }
}

export { DemandHandler };
