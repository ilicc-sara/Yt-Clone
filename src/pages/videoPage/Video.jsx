import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import YouTube from "react-youtube";
import Videos from "@/reusableComponents/Videos";
import Comments from "@/pages/videoPage/videoComponents/Comments";
import { videoResponse, commentsResponse, suggestedResponse } from "@/api/api";

function Video() {
  const params = useParams();
  // Promise.all
  const videoQuery = useQuery({
    queryKey: ["video", params.videoId],
    queryFn: () => fetchVideo(params.videoId),
  });

  const commentsQuery = useQuery({
    queryKey: ["comments", params.videoId],
    queryFn: () => fetchComments(params.videoId),
  });

  const channelId = commentsQuery.data?.items[0].snippet.channelId;
  // const channelId = videoQuery.data?.items.snippet.channelId;
  const suggestedQuery = useQuery({
    queryKey: ["suggested", channelId],
    queryFn: () => fetchSuggested(channelId),
  });

  return (
    <div className="clicked-video-container">
      <div className="video-and-comments">
        {videoQuery.isPending && <div className="loader"></div>}
        {videoQuery.error && <h1>Error...Something went wrong</h1>}
        {videoQuery.data && (
          <div className="video-display">
            <YouTube
              videoId={params.videoId}
              opts={{ height: "600px", width: "1000px" }}
            />

            <h1> {videoQuery.data.items[0].snippet.title} </h1>

            <div className="video-display-info">
              <p className="views">
                {Number(
                  videoQuery.data.items[0].statistics.viewCount
                ).toLocaleString("en-US")}
                &nbsp;views
              </p>

              <p>
                <ion-icon name="thumbs-up-outline"></ion-icon>
                {Number(
                  videoQuery.data.items[0].statistics.likeCount
                ).toLocaleString("en-US")}
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

        {commentsQuery.isPending && <div className="loader"></div>}
        {commentsQuery.error && <h1>Error...Something went wrong</h1>}
        <div className="comments-display">
          <Comments data={commentsQuery.data} />
        </div>
      </div>

      {suggestedQuery.isPending && <div className="loader"></div>}
      {suggestedQuery.error && <h1>Error...Something went wrong</h1>}
      <div className="suggested-display">
        <Videos data={suggestedQuery.data} />
      </div>
    </div>
  );
}

const fetchVideo = async (id) => {
  const url = `https://youtube-v31.p.rapidapi.com/videos?part=contentDetails,snippet,statistics&id=${id}`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "6e1e214538msha84c2422b643eebp154501jsn37bc9081d310",
      "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
    },
  };

  const response = await fetch(url, options);
  return await response.json();

  // return videoResponse;
};

const fetchComments = async (id) => {
  const commentsUrl = `https://youtube-v31.p.rapidapi.com/commentThreads?part=snippet&videoId=${id}&maxResults=100`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "6e1e214538msha84c2422b643eebp154501jsn37bc9081d310",
      "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
    },
  };

  const response = await fetch(commentsUrl, options);
  return await response.json();

  // return commentsResponse;
};

const fetchSuggested = async (id) => {
  const suggestedUrl = `https://youtube-v31.p.rapidapi.com/search?channelId=${id}&part=snippet,id&order=date&maxResults=34`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "6e1e214538msha84c2422b643eebp154501jsn37bc9081d310",
      "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
    },
  };

  const response = await fetch(suggestedUrl, options);
  return await response.json();

  // return suggestedResponse;
};

export default Video;
