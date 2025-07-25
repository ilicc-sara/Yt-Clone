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
  // const { data, isPending, isLoading, error, isFetching } = useQuery({
  //   queryKey: ["videos", params.videoId],
  //   queryFn: () => renderVideo(params.videoId),
  // });

  const videoQuery = useQuery({
    queryKey: ["videos", params.videoId],
    queryFn: () => renderVideo(params.videoId),
  });

  // const commentsQuery = useQuery({
  //   queryKey: ["comments", params.videoId],
  //   queryFn: () => renderComments(params.videoId),
  // });

  // // console.log(videoQuery.data);
  // console.log(commentsQuery.data);
  return (
    <>
      {videoQuery.isPending && <h1>Loading...</h1>}
      {/* <h1>Video {params.videoId} </h1> */}

      {videoQuery.data && (
        <div className="video-display">
          <YouTube
            videoId={params.videoId}
            opts={{ height: "500px", width: "900px" }}
          />

          <h1> {videoQuery.data.items[0].snippet.title} </h1>

          <div className="video-display-info">
            <p className="views">
              {" "}
              {Number(
                videoQuery.data.items[0].statistics.viewCount
              ).toLocaleString("en-US")}{" "}
              views
            </p>

            <p>
              <ion-icon name="thumbs-up-outline"></ion-icon>{" "}
              {videoQuery.data.items[0].statistics.likeCount}{" "}
            </p>
            <ion-icon name="thumbs-down-outline"></ion-icon>
            <p>
              <ion-icon name="share-social-outline"></ion-icon>
              SHARE
            </p>

            <p>
              <ion-icon name="download-outline"></ion-icon>
              Download
            </p>
          </div>
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

// const renderComments = async (id) => {
//   const commentsUrl = `https://youtube-v31.p.rapidapi.com/commentThreads?part=snippet&videoId=${id}&maxResults=100`;
//   const options = {
//     method: "GET",
//     headers: {
//       "x-rapidapi-key": "d9efc1fe32msh16930bf036ff25cp19e4d2jsn0888502f5ab3",
//       "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
//     },
//   };

//   const response = await fetch(commentsUrl, options);
//   return await response.json();
// };

export default Video;
