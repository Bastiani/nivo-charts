"use client";

import { useFetch } from "@hyper-fetch/react";
import BarChart from "@/components/BarChart";
import { nivoBarModule } from "../data/barChartProps";
import { getPost } from "@/lib/getPost";

export default function Home() {
  const result = useFetch(
    getPost.setParams({ postId: "665a27715bedb1bd0c50eec0" }),
    {
      refresh: true,
    }
  );

  const { data, error, loading } = result;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div className="w-[644px] h-[300px] mt-6">
          <span>teste</span>
          <BarChart {...nivoBarModule} />
        </div>
      </div>
      {JSON.stringify(data, null, 2)}
      {loading ? (
        <div className="text-amber-500">Loading...</div>
      ) : (
        !error && (
          <div>
            {data?.data?.title}
            <br />
            {data?.data?.body}
          </div>
        )
      )}
    </main>
  );
}
