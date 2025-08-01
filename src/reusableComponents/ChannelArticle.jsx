function ChannelArticle(props) {
  const { profilePicture, title, description } = props;
  return (
    <article className="channel-article">
      <img className="channel-profile-picture" src={profilePicture} />
      <p className="channel-title">{title}</p>
      <div className="description-cont">
        <p>
          {description.length > 100
            ? description.slice(0, 100) + "..."
            : description}
        </p>
      </div>
    </article>
  );
}

export default ChannelArticle;
