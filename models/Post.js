const { GraphQLID } = require("graphql");
const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  id: String,
  text_title: { type: String },
  text_subtitle: { type: String },
  slug_text: { type: String },
  description_text: { type: Array },
  date_created: { type: String },
  post_img: { type: String },
  post_img_collection: { type: Array },
});

module.exports = mongoose.model("Post", PostSchema);
