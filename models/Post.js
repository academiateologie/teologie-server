const mongoose = require("mongoose");

const ImgOfCollectionSchema = new mongoose.Schema({ name: String });

const PostSchema = new mongoose.Schema({
  id: { type: String },
  text_title: { type: String },
  slug_text: { type: String },
  description_text: { type: String },
  date_created: { type: String },
  post_img: { type: String },
  post_img_collection: { type: Array },
  //   floor: { type: String },
  //   room: { type: String },
  //   living__space: { type: String },
  //   total__area: { type: String },
  //   url__gen: { type: String },
  //   url__3d: { type: String },
  //   url__schema: { type: String },
  //   populare: { type: Boolean },
});

module.exports = mongoose.model("Post", PostSchema);
