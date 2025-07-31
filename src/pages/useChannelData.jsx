import React from "react";
import { useQuery } from "@tanstack/react-query";

function useChannelData(id) {
  const channelQuery = useQuery({
    queryKey: ["channel", id],
    queryFn: () => fetchChannel(id),
  });

  const channelVideosQuery = useQuery({
    queryKey: ["channelVideos", id],
    queryFn: () => fetchChannelVideos(id),
  });

  const fetchChannel = async (id) => {
    const channelDetailsUrl = `https://youtube-v31.p.rapidapi.com/channels?part=snippet,statistics&id=${id}`;
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "c9e2d65fe7mshca8fe4008c92235p15a31cjsn0bd9306283b0",
        "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
      },
    };

    const response = await fetch(channelDetailsUrl, options);
    return await response.json();

    // return channelResponse;
  };

  const fetchChannelVideos = async (id) => {
    const channelVideosUrl = `https://youtube-v31.p.rapidapi.com/search?channelId=${id}&part=snippet,id&order=date&maxResults=34`;
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "c9e2d65fe7mshca8fe4008c92235p15a31cjsn0bd9306283b0",
        "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
      },
    };

    const response = await fetch(channelVideosUrl, options);
    return await response.json();

    // return channelVideosResponse;
  };

  return { channelQuery, channelVideosQuery };
}

export default useChannelData;
