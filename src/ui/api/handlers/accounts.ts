import { Request, Response } from "express";
import IAccountService from "../../../core/interfaces/services/IAccountService";

class AccountsHandler {
  constructor(private readonly service: IAccountService) {
    this.getAll = this.getAll.bind(this);
  }

  async getAll(_: Request, res: Response) {
    const accounts = await this.service.fetch();
    return res.send(accounts.map((account) => account.toJSON()));
  }
}

export { AccountsHandler };
