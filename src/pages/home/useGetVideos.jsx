import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { videosResponse, trendingResponse } from "@/api/api";

function useGetVideos(id) {
  const { data, isPending, isLoading, error, isFetching } = useQuery({
    queryKey: ["videos", id],
    queryFn: () => fetchVideos(id),
  });

  const fetchVideos = async (id) => {
    const url = `https://youtube-v31.p.rapidapi.com/search?q=${id}&part=snippet,id&maxResults=24&regionCode=US`;
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "c9e2d65fe7mshca8fe4008c92235p15a31cjsn0bd9306283b0",
        "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
      },
    };
    const response = await fetch(url, options);
    return await response.json();
    // return trendingResponse;
  };

  return { data, isPending, error };
}

export default useGetVideos;
