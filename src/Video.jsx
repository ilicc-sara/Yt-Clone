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
        <>
          <YouTube videoId={params.videoId} />
          {/* <div
            style={{
              backgroundImage: `url(${data.items[0].snippet.thumbnails.standard.url})`,
              width: "640px",
              height: "480px",
            }}
          >
            <p> {data.items[0].snippet.title} </p>
          </div> */}
          <p> {data.items[0].snippet.title} </p>
        </>
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
