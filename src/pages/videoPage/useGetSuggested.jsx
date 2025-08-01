import React from "react";
import { useQuery } from "@tanstack/react-query";

function useGetSuggested(id) {
  const suggestedQuery = useQuery({
    queryKey: ["suggested", id],
    queryFn: () => fetchSuggested(id),
    // enabled: !channelId,
  });
  const fetchSuggested = async (id) => {
    const suggestedUrl = `https://youtube-v31.p.rapidapi.com/search?channelId=${id}&part=snippet,id&order=date&maxResults=34`;
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "cf858ffe84msh7f4d793b57b3f6dp179b64jsn328088b8705e",
        "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
      },
    };

    const response = await fetch(suggestedUrl, options);
    return await response.json();

    // return suggestedResponse;
  };
  return { suggestedQuery };
}

export default useGetSuggested;
