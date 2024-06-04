import { connectDatabase } from "@/lib/mongodb";
import PostModel from "@/models/posts";

export default async function handler(req: any, res: any) {
  if (req.method === "POST") {
    const { title, body } = req.body;

    if (!title || !body) {
      res.status(400).json({ message: "Title and body are required" });
      return;
    }

    try {
      await connectDatabase();
      const post = new PostModel({
        title,
        body,
      });
      const result = await post.save();
      res.status(201).json({ message: "Post created", _id: result._id });
    } catch (error) {
      res.status(500).json({ message: "Error creating post", error });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
