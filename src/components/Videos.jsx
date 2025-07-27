import Article from "./Article";
import { formatDistanceToNow } from "date-fns";
import { Link } from "react-router-dom";

function formatDate(string) {
  const index = string.indexOf("T");

  const dateOfUploading = string.slice(0, index).split("-");

  const timeAgo = formatDistanceToNow(dateOfUploading, { addSuffix: true });

  return timeAgo.replace("about ", "");
}

function Videos(props) {
  const { data } = props;

  return data?.items?.map((video, index) => {
    if (video.id.kind === "youtube#video") {
      return (
        <Link className="link-article" to={`/video/${video.id.videoId}`}>
          <Article
            key={index}
            thumbnail={video.snippet.thumbnails.default.url}
            title={video.snippet.title}
            chanel={video.snippet.channelTitle}
            time={formatDate(video.snippet.publishedAt)}
          />
        </Link>
      );
    } else if (video.id.kind === "youtube#channel") {
      return (
        <Link
          className="link-channel-arcitle"
          to={`/channel/${video.id.channelId}`}
        >
          {video.snippet.title}
        </Link>
      );
    }
  });
}

export default Videos;
