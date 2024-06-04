import { Schema, model, models } from "mongoose";

const postSchema = new Schema(
  {
    posts: {
      title: String,
      body: String,
      category: String,
      date: Date,
    },
  },
  { timestamps: true }
);

const PostModel = models.posts || model("posts", postSchema);

export default PostModel;
