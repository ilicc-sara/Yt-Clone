import { useState } from "react";
import { useParams } from "react-router-dom";
import YouTube from "react-youtube";
import Videos from "@/UI/Videos";
import Comments from "@/pages/videoPage/videoComponents/Comments";
import { videoResponse, commentsResponse, suggestedResponse } from "@/api/api";
import useGetData from "@/api/useGetData";
import useGetSuggested from "@/api/useGetSuggested";

function Video() {
  const params = useParams();

  const { data, isPending, error } = useGetData(params.videoId);

  const channelId = data?.data2.items[0].snippet.channelId;
  const { suggestedQuery } = useGetSuggested(channelId);

  const [showMobileRecomended, setShowMobileRecomended] = useState(false);

  return (
    <>
      <div className="recomended-mobile">
        <i
          class="bxr  bx-list-ul list-icon"
          onClick={() => setShowMobileRecomended(true)}
        ></i>
      </div>
      <div className="clicked-video-container">
        <div className="video-and-comments">
          {isPending && <div className="loader"></div>}
          {error && <h1>Error...Something went wrong</h1>}
          {data?.data1 && (
            <div className="video-display">
              <div className="video-wrapper">
                <YouTube
                  videoId={params.videoId}
                  className="video-yt"
                  // opts={{ height: "600px", width: "1000px" }}
                />
              </div>

              <h1> {data?.data1.items[0].snippet.title} </h1>

              <div className="video-display-info">
                <p className="views">
                  {Number(
                    data?.data1.items[0].statistics.viewCount
                  ).toLocaleString("en-US")}
                  &nbsp;views
                </p>

                <p>
                  <ion-icon name="thumbs-up-outline"></ion-icon>
                  {Number(
                    data?.data1.items[0].statistics.likeCount
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

          <div className="comments-display">
            <Comments data={data?.data2} />
          </div>
        </div>

        {suggestedQuery.isPending && <div className="loader"></div>}
        {suggestedQuery.error && <h1>Error...Something went wrong</h1>}
        <div className="suggested-display">
          <Videos data={suggestedQuery.data} />
        </div>

        {showMobileRecomended && (
          <div className="recomended-videos-mobile">
            <ion-icon
              name="close"
              className="close-mobile-nav"
              onClick={() => setShowMobileRecomended(false)}
            ></ion-icon>
            <Videos data={suggestedQuery.data} />
          </div>
        )}
      </div>
    </>
  );
}

export default Video;
