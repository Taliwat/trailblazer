import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_REVIEW = gql`
  mutation addReview(
    $_id: ID!,
    $body: String!,
    $score: Int!,
    $parkCode: String!,
    $authorName: String!
    ) {
        addReview(_id: $_id, parkCode: $parkCode, body: $body, score: $score, authorName: $authorName) {
          _id
          parkCode
          body
          author
          authorName
          score
          createdAt
          updatedAt
        }
    }
`

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
    $username: String!
    $state: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
      username: $username
      state: $state
    ) {
        token
        user {
          _id
      }
    }
  }
`;

export const ADD_WISHLIST = gql`
  mutation addWishList($parkCode: String!) {
    addWishList(parkCode: $parkCode){
      _id
    }
  }
`

export const ADD_VISITLIST = gql`
  mutation addVisitList($parkCode: String!) {
    addVisitList(parkCode: $parkCode){
      _id
    }
  }
`

export const REMOVE_WISHLIST = gql`
  mutation removeWishList($parkCode: String!) {
    removeWishList(parkCode: $parkCode){
        _id
    }
  }
`

export const REMOVE_VISITLIST = gql`
  mutation removeVisitList($parkCode: String!) {
    removeVisitList(parkCode: $parkCode){
        _id
    }
  }
`