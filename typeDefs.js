const { gql } = require('apollo-server');

module.exports.typeDefs = gql`
  # Comments in GraphQL are defined with the hash (#) symbol.

  # the Pokemon type can now be used in other type declarations! : )
  type Pokemon {
    num: String
    name: String
    type: [String]
    weaknesses: [String]
    next_evolution: [Pokemon]
    prev_evolution: [Pokemon]
    height: String
    weight: String
  }

  # The "Query" type is the root of all GraphQL queries.
  type Query {
    pokemon(num: String, name: String, type: [String]): [Pokemon]
  }
`;