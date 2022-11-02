import Account from "../../../core/domain/models/Account";
import AccountAdapter from "../../../core/interfaces/adapter/AccountAdapter";
import database from "../../../../database.json";

class AccountFileSys extends AccountAdapter {
  fetch(): Promise<Account[]> {
    return Promise.resolve(database["accounts"].map(Account.fromJSON));
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

export default AccountFileSys;
