const { User, Review } = require('../models/');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
      reviews: async () => {
        return await Review.find({ reviewId }).sort({ createdAt: -1});
      },

      review: async (parent, { reviewId }) => {
        return await Review.findOne({ _id: reviewID });
      },

      users: async () => {
        return User.find();
      },
      
      user: async (parent, { userId } ) => {
        return await User.findOne({ _id: userId});
      },
      //get logged in user without specifically looking for them
      me: async (parent, args, context) => {
        if (context.user) {
            return User.findOne({ _id: context.user.userId });
        }
        throw new AuthenticationError('You have to be logged in!');
      },
    },

    mutation: {
        
    }


}