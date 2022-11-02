import IAccountService from "../../../core/interfaces/services/IAccountService";

class AccountsGraphQLHandler {
  constructor(protected readonly service: IAccountService) {
    this.listAccounts = this.listAccounts.bind(this);
  }

  async listAccounts() {
    const accounts = await this.service.fetch();
    return accounts;
  }
}

export default AccountsGraphQLHandler;
