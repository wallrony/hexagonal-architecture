import Demand from "../../../core/domain/models/Demand";
import DemandAdapter from "../../../core/interfaces/adapter/DemandAdapter";
import database from "../../../../database.json";

class DemandFileSys extends DemandAdapter {
  fetch(): Promise<Demand[]> {
    return Promise.resolve(database["demands"].map(Demand.fromJSON));
  }
  fetchByAccount(accountId: number): Promise<Demand[]> {
    throw new Error("Method not implemented.");
  }
  create(demand: Demand): Promise<number> {
    throw new Error("Method not implemented.");
  }
  update(demand: Demand): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  delete(demandId: number): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
}

export default DemandFileSys;
