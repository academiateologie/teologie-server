const Post = require("../models/Post.js");

const resolvers = {
  Query: {
    getPosts: async () => {
      return await Post.find({});
    },
    getPostById: async (_, { id }) => {
      return await Post.findById(id);
    },
  },
};

module.exports = resolvers;