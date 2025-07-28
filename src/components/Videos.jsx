import Article from "./Article";
import ChannelArticle from "./ChannelArticle";
import { Link } from "react-router-dom";

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
            time={video.snippet.publishedAt}
          />
        </Link>
      );
    } else if (video.id.kind === "youtube#channel") {
      return (
        <Link
          className="link-channel-article"
          to={`/channel/${video.id.channelId}`}
        >
          <ChannelArticle
            key={index}
            profilePicture={video.snippet.thumbnails.medium.url}
            title={video.snippet.title}
            description={video.snippet.description}
          />
        </Link>
      );
    }
  });
}

export default Videos;
