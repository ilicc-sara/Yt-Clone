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
        "x-rapidapi-key": "ca15920c56mshf9c581b5644b811p131238jsnb4402ca00e5c",
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
