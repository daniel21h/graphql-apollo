import express from "express";
import { ApolloServer } from "apollo-server-express";
import { createConnection } from "typeorm";

import typeDefs from "./typedefs";
import resolvers from "./resolvers";

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.applyMiddleware({ app });

createConnection();

app.get("/", (request, response) => {
  return response.json({ message: "Hello World" });
});

app.listen(4000, () => {
  console.log("GraphQL server running on port 4000.");
});
