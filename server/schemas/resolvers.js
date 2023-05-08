const { User, Review } = require('../models/');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
      reviews: async ({ parkCode }) => {
        return await Review.find({ _id: parkCode }).sort({ createdAt: -1});
      },

      review: async (parent, { reviewId }) => {
        return await Review.findOne({ _id: reviewId });
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

    Mutation: {
        addUser: async (parent, { firstName, lastName, username, email, password, state }) => {
            const user = await User.create({ firstName, lastName, username, email, password, state });
            const token = signToken(user);

            return { token, profile };
        },
        addReview: async (parent, { userId, score, body, parkCode,  }, context) => {
            if (context.user) {
              const review = Review.create({
                body,
                score,
                parkCode,
                author: context.user.username
              });

              await User.findOneAndUpdate(
                { _id: userId },
                { $addToSet: {reviews: reviewId }}
              );
              return review;
            }
            throw new AuthenticationError('You have to be logged in!');
        },
        //remove your account only if logged in 
        removeUser: async (parent, args, context) => {
            if (context.user) {
                return User.findOneAndDelete({ _id: context.user._id });
            }
            throw new AuthenticationError('You need to be logged in!');
        },
        //logged in user can only remove their reviews
        removeReview: async (parent, { reviewId }, context) => {
          //delete the whole review itself
          if (context.user) {
            const review = Review.findOneAndDelete({ 
              _id: reviewId,
              author: context.user.username,
            });
        
              await User.findOneAndUpdate(
                  { _id: context.user._id },
                  { $pull: { reviews: review._id } },
                  { new: true }
              );

              return review;
            }
            throw new AuthenticationError('You need to be logged in!');
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('No user with this email found!')
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect password!!');
            }

            const token = signToken(user);
            return { token, user };
        },
        // signup, edit user, edit review
    },
};

module.exports = resolvers;