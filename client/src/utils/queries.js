import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  {
    user {
      _id
      firstName
      lastName
      username
      wishList {
        parks{
          _id
          NPS_id
          url
          fullName
          parkCode
          latitude
          longitude
          states
          designation
        }
      }
    }
  }
`;

export const QUERY_REVIEWS = gql`
  query getReviews($parkCode: String!) {
    reviews(parkCode: $parkCode) {
      _id
      parkCode
      author
      authorName
      body
      score
      createdAt
      updatedAt
    }
  }
`;

export const QUERY_SINGLE_REVIEW = gql`
  query getSingleReview($_id: ID!) {
    review(_id: $_id) {
      _id
      parkCode
      author
      body
      score
      createdAt
      updatedAt
    }
  }
`;

export const QUERY_ME = gql`
  {
    me {
        _id
        firstName
        lastName
        username
        email
        parksVisited
        wishList
        state
    }
  }
`;

export const QUERY_USER_REVIEWS = gql`
  {
    userReviews {
      author
      authorName
      parkCode
      body
      score
      createdAt
      updatedAt
    }
  }
`;
