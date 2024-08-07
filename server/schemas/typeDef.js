const typeDefs = `
    type User {
    _id: ID
    username: String!
    email: String!
    password: String!
    bookCount: Number
    savedBooks: [Book]
  }

  type Book {
  _id: ID
  description: String!
  bookId: String!
  authors: [String!]
  image: String
  link: String
 description: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
