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
            thumbnail={video.snippet.thumbnails.medium.url}
            title={video.snippet.title}
            chanel={video.snippet.channelTitle}
            time={formatDate(video.snippet.publishedAt)}
          />
        </Link>
      );
    } else if (video.id.kind === "youtube#channel") {
      return (
        <Link
          className="link-channel-article"
          to={`/channel/${video.id.channelId}`}
        >
          {/* {video.snippet.title} */}

          <article className="channel-article" key={index}>
            <img
              className="channel-profile-picture"
              src={video.snippet.thumbnails.medium.url}
            />
            <p className="channel-title">{video.snippet.title}</p>
            <div className="description-cont">
              <p>{video.snippet.description.slice(0, 120) + "..."}</p>
            </div>
          </article>
        </Link>
      );
    }
  });
}

export default Videos;
