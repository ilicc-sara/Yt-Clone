import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import YouTube from "react-youtube";
import Videos from "@/reusableComponents/Videos";
import Comments from "@/pages/videoPage/videoComponents/Comments";
import { videoResponse, commentsResponse, suggestedResponse } from "@/api/api";

function Video() {
  const params = useParams();

  const { data, isPending, error } = useQuery({
    queryKey: ["multipleData", params.videoId],
    queryFn: () => fetchMultipleData(params.videoId),
  });

  console.log(data?.data1);
  console.log(data?.data2);

  const channelId = data?.data2.items[0].snippet.channelId;

  const suggestedQuery = useQuery({
    queryKey: ["suggested", channelId],
    queryFn: () => fetchSuggested(channelId),
    // enabled: !channelId,
  });

  return (
    <div className="clicked-video-container">
      <div className="video-and-comments">
        {isPending && <div className="loader"></div>}
        {error && <h1>Error...Something went wrong</h1>}
        {data?.data1 && (
          <div className="video-display">
            <YouTube
              videoId={params.videoId}
              opts={{ height: "600px", width: "1000px" }}
            />

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
    </div>
  );
}

const fetchMultipleData = async (id) => {
  const url = `https://youtube-v31.p.rapidapi.com/videos?part=contentDetails,snippet,statistics&id=${id}`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "c9e2d65fe7mshca8fe4008c92235p15a31cjsn0bd9306283b0",
      "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
    },
  };
  const commentsUrl = `https://youtube-v31.p.rapidapi.com/commentThreads?part=snippet&videoId=${id}&maxResults=100`;

  const [data1, data2] = await Promise.all([
    fetch(url, options).then((res) => res.json()),
    fetch(commentsUrl, options).then((res) => res.json()),
  ]);
  return { data1, data2 };
};

const fetchSuggested = async (id) => {
  const suggestedUrl = `https://youtube-v31.p.rapidapi.com/search?channelId=${id}&part=snippet,id&order=date&maxResults=34`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "c9e2d65fe7mshca8fe4008c92235p15a31cjsn0bd9306283b0",
      "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
    },
  };

  const response = await fetch(suggestedUrl, options);
  return await response.json();

  // return suggestedResponse;
};

export default Video;
