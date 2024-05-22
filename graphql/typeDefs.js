const typeDefs = `
  type Post {
    id: String,
    text_title: String,
    text_subtitle: String,
    slug_text: String,
    date_created: String,
    post_img: String
    description_text: [String]
    post_img_collection: [String]
  }

  type Query {
    getPosts: [Post]
    getPost(id: String!): Post
  }
`;

module.exports = typeDefs;