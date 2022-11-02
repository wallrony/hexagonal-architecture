import Demand from "../../domain/models/Demand";
import DemandAdapter from "../adapter/DemandAdapter";
import DemandFoodAdapter from "../adapter/DemandFoodAdapter";

abstract class IDemandService {
  constructor(
    protected readonly adapter: DemandAdapter,
    protected readonly demandFoodAdapter: DemandFoodAdapter
  ) {}

  abstract fetch(): Promise<Demand[]>;
  abstract fetchByAccount(accountId: number): Promise<Demand[]>;
  abstract create(demand: Demand): Promise<boolean>;
  abstract update(demand: Demand): Promise<boolean>;
  abstract delete(demandId: number): Promise<boolean>;
}

export default IDemandService;
