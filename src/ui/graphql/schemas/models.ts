import { gql } from "apollo-server-express";

export const models = gql`
  type Account {
    id: Int
    name: String
    birthDate: String
    cpf: String
  }
`;
