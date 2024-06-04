import { DateInterval } from "@hyper-fetch/core";

import { client } from "./client";

type PostModel = {
  data: {
    title: string;
    body: string;
  };
};

export const getPost = client.createRequest<PostModel>()({
  endpoint: "/api/blog/posts/:postId",
  cache: true,
  cacheTime: DateInterval.second * 10,
});
