import React from "react";
import { formatDistance, subDays, formatDistanceToNow } from "date-fns";

function formatDate(string) {
  const index = string.indexOf("T");

  const dateOfUploading = string.slice(0, index).split("-");

  const timeAgo = formatDistanceToNow(dateOfUploading, { addSuffix: true });

  return timeAgo.replace("about ", "");
}

function Comments(props) {
  const { data } = props;
  return data?.items?.map((comment, index) =>
    // prettier-ignore
    <div key={index} className="comments-display-item">

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
  );
}

export default Comments;
