import { gql } from "apollo-server-express";
import { query as accountsQueries } from "./accounts";
import { models } from "./models";

const schemas = gql`
  type Query {
    ${accountsQueries}
  }

  ${models}
`;

export { schemas };
