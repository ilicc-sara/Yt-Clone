import React from "react";
import { useQuery } from "@tanstack/react-query";

function useGetData(id) {
  const { data, isPending, error } = useQuery({
    queryKey: ["multipleData", id],
    queryFn: () => fetchMultipleData(id),
  });

  const fetchMultipleData = async (id) => {
    const url = `https://youtube-v31.p.rapidapi.com/videos?part=contentDetails,snippet,statistics&id=${id}`;
    const commentsUrl = `https://youtube-v31.p.rapidapi.com/commentThreads?part=snippet&videoId=${id}&maxResults=100`;
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "ca15920c56mshf9c581b5644b811p131238jsnb4402ca00e5c",
        "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
      },
    };

    const [data1, data2] = await Promise.all([
      fetch(url, options).then((res) => res.json()),
      fetch(commentsUrl, options).then((res) => res.json()),
    ]);
    return { data1, data2 };
  };

  return { data, isPending, error };
}

export default useGetData;
