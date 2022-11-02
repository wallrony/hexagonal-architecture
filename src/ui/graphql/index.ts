import express from "express";
import dotenv from "dotenv";
import { ApolloServer } from "apollo-server-express";
import { schemas } from "./schemas";
import { loadResolvers } from "./resolvers";

async function bootstrap() {
  dotenv.config();
  const app = express();
  const server = new ApolloServer({
    typeDefs: schemas,
    resolvers: loadResolvers(),
  });

  await server.start();
  server.applyMiddleware({ app });
  app.listen(4000, () => {
    console.log("Apollo GraphQL Server listen on 4000!");
  });
}

bootstrap();
