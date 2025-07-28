import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { channelResponse } from "@/api/api";

function Channel(props) {
  const params = useParams();

  const channelQuery = useQuery({
    queryKey: ["channel", params.channelId],
    queryFn: () => renderChannel(params.channelId),
  });

  console.log(channelQuery.data?.items[0].snippet);

  return (
    <div className="clicked-channel-container">
      <img
        style={{ borderRadius: "222px" }}
        src={channelQuery.data?.items[0].snippet.thumbnails.medium.url}
      />
      <h1>{channelQuery.data?.items[0].snippet.title}</h1>
      <p> {channelQuery.data?.items[0].snippet.description} </p>

      <div className="channel-videos-container"></div>
    </div>
  );
}

const renderChannel = async (id) => {
  // const channelDetailsUrl = `https://youtube-v31.p.rapidapi.com/channels?part=snippet,statistics&id=${id}`;
  // const options = {
  //   method: "GET",
  //   headers: {
  //     "x-rapidapi-key": "96e63d6a9dmsh343f9a787999921p182641jsnb26da9452b9e",
  //     "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
  //   },
  // };

  // const response = await fetch(channelDetailsUrl, options);
  // return await response.json();

  return channelResponse;
};

export default Channel;
