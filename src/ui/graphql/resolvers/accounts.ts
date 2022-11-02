import IAccountService from "../../../core/interfaces/services/IAccountService";
import AccountsGraphQLHandler from "../handlers/accounts";

export function loadResolvers(service: IAccountService) {
  const handler = new AccountsGraphQLHandler(service);

  return {
    query: {
      listAccounts: handler.listAccounts,
    },
  };
}
