const typeDefs = `
    type User {
    _id: ID
    username: String!
    email: String!
    password: String!
    bookCount: Int
    savedBooks: [Book]
  }

  type Book {
  bookId: ID
  title: String!
  description: String!
  authors: [String]
  image: String
  link: String
  }

  input BookInput {
   bookId: ID
  title: String!
  description: String!
  authors: [String]
  image: String
  link: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    logIn(email: String!, password: String!): Auth
    saveBook(bookData: BookInput!): User
    removeBook(bookId: ID!): User
  }
`;

module.exports = typeDefs;
