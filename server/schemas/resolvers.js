const { User, Review } = require('../models/');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    reviews: async (parent, { parkCode }) => {
      return await Review.find({ parkCode: parkCode }).sort({ createdAt: -1 });
    },

    review: async (parent, { _id }) => {
      return await Review.findOne({ _id: _id });
    },

    users: async () => {
      return User.find();
    },

    user: async (parent, { _id }) => {
      return await User.findOne({ _id: _id });
    },
    //get logged in user without specifically looking for them
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError('You have to be logged in!');
    },
  },

  Mutation: {
    addUser: async (parent, { firstName, lastName, username, email, password, state }) => {
      const user = await User.create({ firstName, lastName, username, email, password, state });
      const token = signToken(user);

      return { token, user };
    },
    addReview: async (parent, { _id, score, body, parkCode, authorName }, context) => {
      if (context.user) {
        const review = Review.create({
          body,
          score,
          parkCode,
          author: _id,
          authorName: authorName
        });
        return review;
      }
      throw new AuthenticationError('You have to be logged in!');
    },

    addWishList: async (parent, { parkCode }, context) => {
      if (!context.user) throw new AuthenticationError('You have to be logged in!');

      const user = await User.findOne({ _id: context.user._id })

      if (user.wishList.includes(parkCode)) return user

      user.wishList = [...user.wishList, parkCode]
      await user.save()

      return user
    },

    addVisitList: async (parent, { parkCode }, context) => {
      if (!context.user) throw new AuthenticationError('You have to be logged in!');

      const user = await User.findOne({ _id: context.user._id })

      if (user.parksVisited.includes(parkCode)) return user

      user.parksVisited = [...user.parksVisited, parkCode]
      await user.save()

      return user
    },

    removeWishList: async (parent, { parkCode }, context) => {
      if (!context.user) throw new AuthenticationError('You have to be logged in!');
      const user = await User.findOne({ _id: context.user._id })

      if (!user.wishList.includes(parkCode)) return user

      const newWishList = user.wishList.filter(park => park != parkCode)
      user.wishList = newWishList
      await user.save()

      return user
    },

    removeVisitList: async (parent, { parkCode }, context) => {
      if (!context.user) throw new AuthenticationError('You have to be logged in!');
      const user = await User.findOne({ _id: context.user._id })

      if (!user.parksVisited.includes(parkCode)) return user

      const newParkList = user.parksVisited.filter(park => park != parkCode)
      user.parksVisited = newParkList
      await user.save()

      return user
    },
    //remove your account only if logged in 
    removeUser: async (parent, args, context) => {
      if (context.user) {
        return User.findOneAndDelete({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    //logged in user can only remove their reviews
    removeReview: async (parent, { _id }, context) => {
      //delete the whole review itself
      if (context.user) {
        const review = Review.findOneAndDelete({
          _id: _id,
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