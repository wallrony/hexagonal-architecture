import Demand from "../../../core/domain/models/Demand";
import DemandAdapter from "../../../core/interfaces/adapter/DemandAdapter";
import BasePostgresRepository from "../BasePostgresRepository";

class DemandPostgresRepository
  extends BasePostgresRepository
  implements DemandAdapter
{
  async fetch(): Promise<Demand[]> {
    const result = await this.query(
      "select * from demands inner join demand_foods df on df.demand_id = demands.id;"
    );
    return this.parseDemandsArray(result.rows);
  }

  async fetchByAccount(accountId: number): Promise<Demand[]> {
    const result = await this.query(
      "select * from demands inner join demand_foods df on df.demand_id = demands.id where demands.account_id=$1;",
      [accountId]
    );
    return this.parseDemandsArray(result.rows);
  }

  async create(demand: Demand): Promise<number> {
    const result = await this.query(
      "insert into demands (account_id) values ($1) returning id;",
      [demand.accountId]
    );
    return result.rows[0]["id"];
  }

  async update(demand: Demand): Promise<boolean> {
    const result = await this.query(
      "update demands set account_id=$1 where id=$2;",
      [demand.accountId, demand.id]
    );
    return result.rowCount > 0;
  }

  async delete(demandId: number): Promise<boolean> {
    const result = await this.query("delete from demands where id=$1;", [
      demandId,
    ]);
    return result.rowCount > 0;
  }

  private parseDemandsArray(
    serializedDemands: Record<string, unknown>[]
  ): Demand[] {
    const demands: Demand[] = [];
    const distinctDemandsIds = new Set(
      serializedDemands.map((row) => Number(row["id"]))
    );
    distinctDemandsIds.forEach((demandId) => {
      const demandRows = serializedDemands.filter(
        (row) => row["id"] === demandId
      );
      if (!demandRows || !demandRows.length) return;
      const foodsIds = demandRows.map((row) => row["food_id"]);
      const serializedDemand = demandRows[0];
      demands.push(
        Demand.fromJSON({
          id: serializedDemand["id"],
          accountId: serializedDemand["account_id"],
          createdAt: (serializedDemand["created_at"] as Date).toString(),
          demand_foods: foodsIds.map((foodId) => ({ foodId, demandId })),
        })
      );
    });
    return demands;
  }
}

export default DemandPostgresRepository;
