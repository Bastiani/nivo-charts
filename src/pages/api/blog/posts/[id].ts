import { connectDatabase } from "@/lib/mongodb";
import PostModel from "@/models/posts";

export default async function handler(req: any, res: any) {
  const { method } = req;
  const { id } = req.query;

  switch (method) {
    case "GET":
      try {
        await connectDatabase();
        const post = await PostModel.findById(id);
        if (!post) {
          return res
            .status(404)
            .json({ success: false, error: "Post not found" });
        }
        res
          .status(200)
          .json({ success: true, data: JSON.parse(JSON.stringify(post)) });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
