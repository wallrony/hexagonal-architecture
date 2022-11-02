import Account from "../domain/models/Account";
import IAccountService from "../interfaces/services/IAccountService";

class AccountService extends IAccountService {
  fetch(): Promise<Account[]> {
    return this.adapter.fetch();
  }
  create(account: Account): Promise<boolean> {
    return this.adapter.create(account);
  }
  update(account: Account): Promise<boolean> {
    return this.adapter.update(account);
  }
  delete(accountId: number): Promise<boolean> {
    return this.adapter.delete(accountId);
  }
}

export default AccountService;
