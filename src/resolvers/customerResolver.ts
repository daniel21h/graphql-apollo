import { Customer } from "../entities/Customer";
import { ApolloError } from "apollo-server-express";
import { getRepository } from "typeorm";

const customerResolver = {
  Query: {
    customers: () => {
      // To consult customers in database and return a array
      try {
        return getRepository(Customer).find();
      } catch (err) {
        throw new ApolloError(err);
      }
    },

    // customer(_: any, args: any) => {

    // }
  },
};

export default customerResolver;
