import GraphQLDIContainer from "../../../dicontainer/graphql";
import { loadResolvers as loadAccountResolvers } from "./accounts";

export function loadResolvers() {
  const dicontainer = new GraphQLDIContainer();
  const accountsService = dicontainer.getAccountService();
  const { query: accountQueries } = loadAccountResolvers(accountsService);

  return {
    Query: {
      ...accountQueries,
    },
  };
}
