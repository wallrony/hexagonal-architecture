class Food {
  private _id: number;
  private _name: string;
  private _price: number;

  constructor() {
    this._id = this._price = 0;
    this._name = "";
  }

  static fromJSON(json: Record<string, unknown>): Food {
    const obj = new Food();
    if (json["id"]) {
      obj._id = Number(json["id"]);
    }
    obj._name = String(json["name"]);
    obj._price = Number(json["price"]);
    return obj;
  }

  toJSON(): Record<string, unknown> {
    const json: Record<string, unknown> = {};
    if (this.id) {
      json["id"] = this.id;
    }
    json["name"] = this.name;
    json["price"] = this.price;
    return json;
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get price() {
    return this._price;
  }
}

export default Food;
