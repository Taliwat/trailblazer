const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Review {
    _id: ID
    parkCode: String
    author: String
    authorName: String
    body: String
    score: Int
    createdAt: String
    updatedAt: String
  }

  type User {
    _id: ID
    username: String
    firstName: String
    lastName: String
    email: String
    password: String
    state: String
    parksVisited: [String]
    wishList: [String]
    reviews: [String]
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
    users: [User]
    user(username: String!): User
    reviews(parkCode: String!): [Review]
    review(reviewId: ID!): Review
    me: User
    userReviews: [Review]
  }

  #   mutations
  type Mutation {
    addUser(username: String!, firstName: String!, lastName: String!, email: String!, password: String!, state: String!): Auth
    addReview(body: String!, score: Int!, parkCode: String!, _id: ID, authorName: String!): Review
    removeUser(userId: String!, password: String!): Auth
    removeReview(body: String!, score: Int!): Review
    login(email: String!, password: String!): Auth
    addVisitList(parkCode: String!): User
    removeVisitList(parkCode: String!): User
    addWishList(parkCode: String!): User
    removeWishList(parkCode: String!): User
  }
`;

module.exports = typeDefs;