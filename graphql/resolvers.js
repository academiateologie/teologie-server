const Post = require("../models/Post.js");

const resolvers = {
  Query: {
    getPosts: async () => {
      return await Post.find({});
    },
    getPost: async (_, { id }) => {
      return await Post.findById(id);
    },
  },
};

module.exports = resolvers;

 // getPlan: async (_, { id }) => {
    //   return await Plan.findById(id);
    // },
    // getPlanByFloor: async (parent, { filterBy }) => {
    //   // const query = process.env.MONGO_DB_URI;
    //   const items = await Plan.find();

    //   // filter the items array using the provided filterBy parameter
    //   const filteredItems = items.filter(
    //     (item) => item.someProperty === filterBy
    //   );

    //   return filteredItems;
    // },
    // getPlanByPopulare: async (_, { populare }) => {
    //   const items = await Plan.find();

    //   const filteredItems = items.filter((item) => {
    //     if (populare === true) return item.someProperty;
    //   });

    //   // const res = filteredItems.sort(f => f === true)

    //   return filteredItems;
    // },