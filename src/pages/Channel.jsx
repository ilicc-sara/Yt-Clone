import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Videos from "../UI/Videos";
import { channelResponse, channelVideosResponse } from "@/api/api";
import useChannelData from "@/api/useChannelData";
import { ToastContainer, toast } from "react-toastify";

function Channel() {
  const params = useParams();

  const { channelQuery, channelVideosQuery } = useChannelData(params.channelId);

  useEffect(() => {
    if (channelQuery.error) {
      toast.error("Failed to load channel data...");
    }
  }, [channelQuery.error]);

  useEffect(() => {
    if (channelVideosQuery.error) {
      toast.error("Failed to load channel videos...");
    }
  }, [channelVideosQuery.error]);

  return (
    <div className="clicked-channel-container">
      {channelQuery.isPending && <div className="loader"></div>}
      {channelQuery.error && <h1>Error...Something went wrong</h1>}{" "}
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
        {channelVideosQuery.isPending && <div className="loader"></div>}
        {channelVideosQuery.error && <h1>Error...Something went wrong</h1>}{" "}
        <Videos data={channelVideosQuery.data} />
      </div>
      <ToastContainer position="top-center" />
    </div>
  );
}

export default Channel;
