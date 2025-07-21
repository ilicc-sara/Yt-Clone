import { useParams } from "react-router-dom";
import React from "react";

function Video(props) {
  const params = useParams();
  return <h1>Video {params.videoId} </h1>;
}

export default Video;
