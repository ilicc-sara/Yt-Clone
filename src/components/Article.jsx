import { formatDistanceToNow } from "date-fns";

function formatDate(string) {
  const index = string.indexOf("T");
  const dateOfUploading = string.slice(0, index).split("-");
  const timeAgo = formatDistanceToNow(dateOfUploading, { addSuffix: true });
  return timeAgo.replace("about ", "");
}

function Article(props) {
  const { thumbnail, title, chanel, time } = props;

  return (
    <article className="video-article">
      <img className="thumbnail" src={thumbnail} />
      <p className="title">{title}</p>
      <p className="chanel">{chanel}</p>
      <p className="time-uploaded">{formatDate(time)}</p>
    </article>
  );
}

export default Article;
