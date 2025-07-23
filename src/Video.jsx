import { useParams } from "react-router-dom";
import React from "react";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

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
    </>
  );
}

const renderVideo = async (id) => {
  const response = await fetch(
    // `https://youtube-v31.p.rapidapi.com/search?q=${id}&part=snippet,id&maxResults=24&regionCode=US`,
    `https://youtube-v31.p.rapidapi.com/videos?part=contentDetails,snippet,statistics&id=${id}`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-key": "be6fa48021msh06130b56f1fc57bp1a07f5jsn0641dee67229",
        "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
      },
    }
  );
  return await response.json();
};

export default Video;
