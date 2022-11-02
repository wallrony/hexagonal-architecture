import Account from "../../domain/models/Account";

abstract class AccountAdapter {
  abstract fetch(): Promise<Account[]>;
  abstract create(account: Account): Promise<boolean>;
  abstract update(account: Account): Promise<boolean>;
  abstract delete(accountId: number): Promise<boolean>;
}

export default AccountAdapter;
