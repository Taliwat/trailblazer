import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  {
    user {
      firstName
      lastName
      reviews {
        _id
        author
        body
        score
        createdAt
        updatedAt
      }
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
  query getReviews($parkCode: ID!) {
    reviews(parkCode: $parkCode) {
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

export const QUERY_SINGLE_REVIEW = gql`
  query getSingleReview($reviewId: ID!) {
    review(reviewId: $reviewId) {
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
  query me {
    me {
        _id
        firstName
        lastName
        username
        email
        reviews{
          _id
          parkCode
          body
          author
          score
          createdAt
          updatedAt
      }
    }
  }
`;
