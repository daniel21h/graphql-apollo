import { gql } from 'apollo-server-express'

export default gql`
  type Test {
    message: String!
  }

  type Query {
    talk: Test!
  }
`;
