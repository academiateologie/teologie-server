const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  id: { type: String },
  text_title: { type: String },
  text_subtitle: { type: String },
  slug_text: { type: String },
  description_text: { type: Array },
  date_created: { type: String },
  post_img: { type: String },
  post_img_collection: { type: Array },
});

module.exports = mongoose.model("Post", PostSchema);
