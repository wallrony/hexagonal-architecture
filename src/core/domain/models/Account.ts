class Account {
  private _id: number;
  private _name: string;
  private _birthDate: string;
  private _cpf: string;

  constructor() {
    this._id = 0;
    this._name = this._birthDate = this._cpf = "";
  }

  static fromJSON(json: Record<string, unknown>): Account {
    const obj = new Account();
    if (json["id"]) {
      obj._id = Number(json["id"]);
    }
    obj._name = String(json["name"]);
    obj._birthDate = String(json["birthDate"]);
    obj._cpf = String(json["cpf"]);
    return obj;
  }

  toJSON(): Record<string, unknown> {
    const json: Record<string, unknown> = {};
    if (this.id) {
      json["id"] = this.id;
    }
    json["name"] = this.name;
    json["birthDate"] = this.birthDate;
    json["cpf"] = this.cpf;
    return json;
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get birthDate() {
    return this._birthDate;
  }

  get cpf() {
    return this._cpf;
  }
}

export default Account;
