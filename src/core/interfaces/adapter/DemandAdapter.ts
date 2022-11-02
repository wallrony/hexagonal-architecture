import Demand from "../../domain/models/Demand";

abstract class DemandAdapter {
  abstract fetch(): Promise<Demand[]>;
  abstract fetchByAccount(accountId: number): Promise<Demand[]>;
  abstract create(demand: Demand): Promise<number>;
  abstract update(demand: Demand): Promise<boolean>;
  abstract delete(demandId: number): Promise<boolean>;
}

export default DemandAdapter;
