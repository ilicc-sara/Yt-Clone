import React from "react";
import { useQuery } from "@tanstack/react-query";

function useGetData(id) {
  const { data, isPending, error } = useQuery({
    queryKey: ["multipleData", id],
    queryFn: () => fetchMultipleData(id),
  });

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

  return { data, isPending, error };
}

export default useGetData;
