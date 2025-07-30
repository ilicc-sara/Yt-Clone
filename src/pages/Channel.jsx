import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Videos from "../reusableComponents/Videos";
import { channelResponse, channelVideosResponse } from "@/api/api";

function Channel(props) {
  const params = useParams();

  const channelQuery = useQuery({
    queryKey: ["channel", params.channelId],
    queryFn: () => fetchChannel(params.channelId),
  });

  const channelVideosQuery = useQuery({
    queryKey: ["channelVideos", params.channelId],
    queryFn: () => fetchChannelVideos(params.channelId),
  });

  return (
    <div className="clicked-channel-container">
      {channelQuery.isPending && <h1>Loading...</h1>}
      {channelQuery.error && <h1>Error</h1>}
      <img
        className="channel-img"
        src={channelQuery.data?.items[0].snippet.thumbnails.medium.url}
      />
      <h1 className="channel-name">
        {channelQuery.data?.items[0].snippet.title}
      </h1>
      <p className="channel-description">
        {channelQuery.data?.items[0].snippet.description}
      </p>

      <div className="channel-videos-container">
        <h1 className="displayed-channel-videos">
          {channelQuery.data?.items[0].snippet.title}'s{" "}
          <span className="channel-videos-span">videos</span>
        </h1>
        {channelVideosQuery.isPending && <h1>Loading...</h1>}
        {channelVideosQuery.error && <h1>Error</h1>}
        <Videos data={channelVideosQuery.data} />
      </div>
    </div>
  );
}

const fetchChannel = async (id) => {
  const channelDetailsUrl = `https://youtube-v31.p.rapidapi.com/channels?part=snippet,statistics&id=${id}`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "2f21917738msha04edb7a701a4e8p148aafjsna4f42a08d4a0",
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
      "x-rapidapi-key": "2f21917738msha04edb7a701a4e8p148aafjsna4f42a08d4a0",
      "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
    },
  };

  const response = await fetch(channelVideosUrl, options);
  return await response.json();

  // return channelVideosResponse;
};

export default Channel;
