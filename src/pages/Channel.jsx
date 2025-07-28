import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Videos from "../components/Videos";
import { channelResponse, channelVideosResponse } from "@/api/api";

function Channel(props) {
  const params = useParams();

  const channelQuery = useQuery({
    queryKey: ["channel", params.channelId],
    queryFn: () => renderChannel(params.channelId),
  });

  const channelVideosQuery = useQuery({
    queryKey: ["channelVideos", params.channelId],
    queryFn: () => renderChannelVideos(params.channelId),
  });

  return (
    <div className="clicked-channel-container">
      <img
        style={{ borderRadius: "222px" }}
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

        <Videos data={channelVideosQuery.data} />
      </div>
    </div>
  );
}

const renderChannel = async (id) => {
  const channelDetailsUrl = `https://youtube-v31.p.rapidapi.com/channels?part=snippet,statistics&id=${id}`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "96e63d6a9dmsh343f9a787999921p182641jsnb26da9452b9e",
      "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
    },
  };

  const response = await fetch(channelDetailsUrl, options);
  return await response.json();

  // return channelResponse;
};

const renderChannelVideos = async (id) => {
  const channelVideosUrl = `https://youtube-v31.p.rapidapi.com/search?channelId=${id}&part=snippet,id&order=date&maxResults=34`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "96e63d6a9dmsh343f9a787999921p182641jsnb26da9452b9e",
      "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
    },
  };

  const response = await fetch(channelVideosUrl, options);
  return await response.json();

  // return channelVideosResponse;
};

export default Channel;
