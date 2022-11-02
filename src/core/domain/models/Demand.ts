class Demand {
  private _id: number;
  private _accountId: number;
  private _createdAt: string;
  private _foodIds: number[];

  constructor() {
    this._id = this._accountId = 0;
    this._createdAt = "";
    this._foodIds = [];
  }

  static fromJSON(json: Record<string, unknown>): Demand {
    const obj = new Demand();
    if (json["id"]) {
      obj._id = Number(json["id"]);
    }
    obj._accountId = Number(json["accountId"]);
    obj._createdAt = String(json["createdAt"]);
    if (json["demand_foods"]) {
      obj._foodIds = (json["demand_foods"] as Record<string, unknown>[]).map(
        (item) => Number(item["foodId"])
      );
    }
    return obj;
  }

  toJSON(): Record<string, unknown> {
    const json: Record<string, unknown> = {};
    if (this.id) {
      json["id"] = this.id;
    }
    json["accountId"] = this.accountId;
    json["createdAt"] = this.createdAt;
    json["demand_foods"] = this.foodIds.map((foodId) => ({
      foodId,
      demandId: this.id,
    }));
    return json;
  }

  get id() {
    return this._id;
  }

  get accountId() {
    return this._accountId;
  }

  get createdAt() {
    return this._createdAt;
  }

  get foodIds() {
    return this._foodIds;
  }
}

export default Demand;
