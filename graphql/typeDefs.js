const typeDefs = `
  type Post {
    id: String,
    text_title: String,
    slug_text: String,
    date_created: String,
    post_img: String
    description_text: String
    post_img_collection: [String]
  }

  type Query {
    getPosts: [Post]
    getPost(id: String!): Post
  }
`;

module.exports = typeDefs;
 //      block: String ,
    //      floor: String ,
    //      room: String ,
    //      living__space: Float ,
    //      total__area: Float ,
    //      url__gen: String ,
    //      url__3d: String ,
    // url__schema: String ,
    // populare: Boolean 

      // getPlan(id: String!): Plan
    // getPlanByFloor(floor: String!): [Plan!]!
    // getPlanByPopulare(populare: Boolean!): [Plan!]!
