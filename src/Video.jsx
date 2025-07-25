import { useParams } from "react-router-dom";
import React from "react";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import YouTube from "react-youtube";

function Video(props) {
  const params = useParams();
  const { data, isPending, isLoading, error, isFetching } = useQuery({
    queryKey: ["videos", params.videoId],
    queryFn: () => renderVideo(params.videoId),
  });

  console.log(data);
  return (
    <>
      {isPending && <h1>Loading...</h1>}
      <h1>Video {params.videoId} </h1>

      {data && (
        <div className="video-display">
          <YouTube
            videoId={params.videoId}
            opts={{ height: "500px", width: "900px" }}
          />

          <h1> {data.items[0].snippet.title} </h1>
          <p> views: {data.items[0].statistics.viewCount} </p>
          <ion-icon name="thumbs-up-outline"></ion-icon>
          <ion-icon name="thumbs-down-outline"></ion-icon>
          <ion-icon name="share-social-outline"></ion-icon>
          <ion-icon name="download-outline"></ion-icon>
          <p> likes: {data.items[0].statistics.likeCount} </p>
        </div>
      )}
    </>
  );
}

const renderVideo = async (id) => {
  const url = `https://youtube-v31.p.rapidapi.com/videos?part=contentDetails,snippet,statistics&id=${id}`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "d9efc1fe32msh16930bf036ff25cp19e4d2jsn0888502f5ab3",
      "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
    },
  };

  const response = await fetch(url, options);
  return await response.json();
};

export default Video;
