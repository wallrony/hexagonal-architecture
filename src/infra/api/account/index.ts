import Account from "../../../core/domain/models/Account";
import { DTO } from "../../../core/domain/types/DTO";
import AccountAdapter from "../../../core/interfaces/adapter/AccountAdapter";
import { APIClient } from "../clients/APIClient";

class AccountAPI extends AccountAdapter {
  async fetch(): Promise<Account[]> {
    const response = await APIClient.get<DTO[]>("/accounts");
    return response.data.map(Account.fromJSON);
  }
  create(account: Account): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  update(account: Account): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  delete(accountId: number): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
}

export default AccountAPI;
