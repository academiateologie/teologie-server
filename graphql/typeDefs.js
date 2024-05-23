const typeDefs = `
  type Post {
    id: ID!,
    text_title: String,
    text_subtitle: String,
    slug_text: String,
    date_created: String,
    post_img: String,
    description_text: [String],
    post_img_collection: [String]
  }

  type Query {
    getPosts: [Post]
    getPostById(id: ID!): Post
  }
`;

module.exports = typeDefs;
