const { gql } = require('apollo-server-express');

const typeDefs = gql `
  type Review {
    _id: ID
    parkCode: String
    author: String
    body: String
    score: Int
    createdAt: String
    updatedAt: String
  }

  type User {
    _id: _id
    username: String
    firstName: String
    lastName: String
    email: String
    password: String
    state: String
    parksVisited: String
    wishList: [wishList]
    reviews: [Review]!
  }

  type Park {
    _id: ID
    NPS_id: String
    url: String
    fullName: String
    parkCode: String
    latitude: Int
    longitude: Int
    states: [String]
    designation: String
  }

  type Auth {
    token: ID!
    user: User
  }

  #   queries
  type Query {
    Users: [User]
    user(username: String!): User
    reviews(username: String): [Review]
    review(reviewId: ID!): Thought
    me: User
  }

  #   mutations
  type Mutation {
    addUser(username: String!, firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addReview(body: String!, score: Int!): Review
    removeUser(userId: String!, password: String!): Auth
    removeReview(body: String!, score: Int!): Review
    # edit review and user TBD
    login(email: String!, password: String!): Auth
  }


`