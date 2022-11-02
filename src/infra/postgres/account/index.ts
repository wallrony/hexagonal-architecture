import Account from "../../../core/domain/models/Account";
import AccountAdapter from "../../../core/interfaces/adapter/AccountAdapter";
import BasePostgresRepository from "../BasePostgresRepository";

class AccountPostgresRepository
  extends BasePostgresRepository
  implements AccountAdapter
{
  async fetch(): Promise<Account[]> {
    const result = await this.query("select * from accounts;");
    return result.rows.map((row) =>
      Account.fromJSON({
        id: row["id"],
        name: row["name"],
        birthDate: row["birth_date"],
        cpf: row["cpf"],
      })
    );
  }

  async create(account: Account): Promise<boolean> {
    const result = await this.query(
      "insert into accounts (name, birth_date, cpf) values ($1, $2, $3);",
      [account.name, account.birthDate, account.cpf]
    );
    return result.rowCount > 0;
  }

  async update(account: Account): Promise<boolean> {
    const result = await this.query(
      "update accounts set name=$1, birth_date=$2, cpf=$3 WHERE id=$4;",
      [account.name, account.birthDate, account.cpf, account.id]
    );
    return result.rowCount > 0;
  }

  async delete(accountId: number): Promise<boolean> {
    const result = await this.query("delete from accounts WHERE id=$1;", [
      accountId,
    ]);
    return result.rowCount > 0;
  }
}

export default AccountPostgresRepository;
