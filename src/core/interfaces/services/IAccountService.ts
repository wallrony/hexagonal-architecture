import Account from "../../domain/models/Account";
import AccountAdapter from "../adapter/AccountAdapter";

abstract class IAccountService {
  constructor(protected readonly adapter: AccountAdapter) {}

  abstract fetch(): Promise<Account[]>;
  abstract create(account: Account): Promise<boolean>;
  abstract update(account: Account): Promise<boolean>;
  abstract delete(accountId: number): Promise<boolean>;
}

export default IAccountService;
