import { gql } from "apollo-server-express";

export default gql`
  type Customer {
    customerNumber: ID!
    customerName: String!
    # orders: [Order]
  }

  type Query {
    customers: [Customer]
    customer(id: ID!): Customer
  }

  type Mutation {
    deleteCustomer(id: ID!): Customer!
  }
`;
