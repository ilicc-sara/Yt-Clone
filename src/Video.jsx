import { useParams } from "react-router-dom";
import React from "react";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import YouTube from "react-youtube";
import Videos from "./Videos";
import { formatDistance, subDays, formatDistanceToNow } from "date-fns";

function formatDate(string) {
  const index = string.indexOf("T");

  const dateOfUploading = string.slice(0, index).split("-");

  const timeAgo = formatDistanceToNow(dateOfUploading, { addSuffix: true });

  return timeAgo.replace("about ", "");
}

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

  const commentsQuery = useQuery({
    queryKey: ["comments", params.videoId],
    queryFn: () => renderComments(params.videoId),
  });

  // console.log(videoQuery.data);
  console.log("comments data", commentsQuery.data);
  // console.log("chanelId", commentsQuery.data?.items[0].snippet.channelId);

  const chanelId = commentsQuery.data?.items[0].snippet.channelId;
  console.log("chanelId", chanelId);

  const suggestedQuery = useQuery({
    queryKey: ["suggested", chanelId],
    queryFn: () => renderSuggested(chanelId),
  });

  console.log("suggested videos", suggestedQuery.data);

  return (
    <div className="clicked-video-container">
      <div className="video-and-comments">
        {videoQuery.isPending && <h1>Loading...</h1>}

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
                <ion-icon name="share-social-outline"></ion-icon>&nbsp;SHARE
              </p>

              <p>
                <ion-icon name="download-outline"></ion-icon>&nbsp;Download
              </p>
            </div>
          </div>
        )}

        {commentsQuery.isPending && <h1>Loading...</h1>}
        <div className="comments-display">
          {commentsQuery.data &&
            commentsQuery.data.items.map((comment, index) =>
              // prettier-ignore
              <div className="comments-display-item">

              <img src={comment.snippet.topLevelComment.snippet.authorProfileImageUrl}/>

              <div>
                {/* prettier-ignore */}
                <p className="authors-name" >{comment.snippet.topLevelComment.snippet.authorDisplayName}&nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="published-at">
                    {formatDate(comment.snippet.topLevelComment.snippet.publishedAt)}
                  </span>
                </p>
              
                {/* prettier-ignore */}
                <p className="comment-text" >{comment.snippet.topLevelComment.snippet.textDisplay}</p>

                {/* prettier-ignore */}
                <p className="display-likes" > 
                  <ion-icon name="thumbs-up-outline"></ion-icon> {comment.snippet.topLevelComment.snippet.likeCount}
                </p>
              </div>
            </div>
            )}
        </div>
      </div>

      {suggestedQuery.isPending && <h1>Loading...</h1>}
      <div className="suggested-display">
        <Videos data={suggestedQuery.data} />
      </div>
    </div>
  );
}

const renderVideo = async (id) => {
  const url = `https://youtube-v31.p.rapidapi.com/videos?part=contentDetails,snippet,statistics&id=${id}`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "b60812144cmsh92331a1a8e088d2p19c52ajsndad421260905",
      "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
    },
  };

  const response = await fetch(url, options);
  return await response.json();
};

const renderComments = async (id) => {
  const commentsUrl = `https://youtube-v31.p.rapidapi.com/commentThreads?part=snippet&videoId=${id}&maxResults=100`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "b60812144cmsh92331a1a8e088d2p19c52ajsndad421260905",
      "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
    },
  };

  const response = await fetch(commentsUrl, options);
  return await response.json();
};

const renderSuggested = async (id) => {
  const suggestedUrl = `https://youtube-v31.p.rapidapi.com/search?channelId=${id}&part=snippet,id&order=date&maxResults=34`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "b60812144cmsh92331a1a8e088d2p19c52ajsndad421260905",
      "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
    },
  };

  const response = await fetch(suggestedUrl, options);
  return await response.json();
};

export default Video;
