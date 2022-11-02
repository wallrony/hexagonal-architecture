# Hexagonal Architecture

That's a simple project that presents an implementation for multiple input and output ports following the hexagonal architecture :).

In this one I implemented somethings with Accounts, Foods and Demands. You can see the [database.json](./database.json) to have an idea about what entities this project consider.

## How it works?

I've made some implementations focusing to show how the hexagonal architecture works with multiple input (user interface) and output (infrastructure) ports using the same application (core - business logic) code.

There are some interesting things inside the `src` folder:
- the `infra` folder contains implementations for output ports (`postgres database`, `filesys` and `api`)
- the `core` folder contains all the application (business logic) code - it's simple, but can give you a good idea of how it can look like
- the `ui` folder has the `api` and `graphql` representing input ports
- the `dicontainer` folder has a class for each `ui` implementation to say which business logic and output port it should use, making the `ui` layer agnostic about what is after the business logic wall.

## How to Run?

To run some of these application, please follow the steps below:

1. clone the repo with `git clone https://github.com/wallrony/hexagonal-architecture`
2. create a copy of the `.env.example` file called `.env` in the root of the project and fill it with an available postgres database
3. use the [tools/migrations/0001_init.sql](/tools/migrations/0001_init.sql) to create the database and the tables
4. make sure you have `node` in version 16 or later and `npm` or `yarn` available
5. run `npm install` or `yarn` to install all dependencies
6. run `npm run ts-node src/ui/api/index.ts` to run the `express` server
7. run `npm run ts-node src/ui/graphql/index.ts` to run the `graphql` server

**NOTES**:
  1. you need to run the commands shown above in the root of the project
  2. the [GraphQLDIContainer](/src/dicontainer/graphql/index.ts) is using the API out port. So if you want to use the `graphql` application, you must run the `api` application in parallel or change the out port in the [GraphQLDIContainer](/src/dicontainer/graphql/index.ts)
  3. instead of using the `api` application, you can use the `json-server` with the following command: `npm run json-server database.json --routes routes.json`


