import React, { useState } from "react";
import Videos from "./Videos";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { categories } from "./data";
import { useOutletContext } from "react-router-dom";
import LogRocket from "logrocket";

function Home() {
  const { id, setId } = useOutletContext();

  const { data, isPending, isLoading, error, isFetching } = useQuery({
    queryKey: ["videos", id],
    queryFn: () => renderVideos(id),
  });

  console.log(data);

  return (
    <section>
      <aside>
        {categories.map((category, index) => (
          <div
            key={index}
            className={`category-item ${category.id === id ? "active" : ""}`}
          >
            <ion-icon
              name={
                category.icon.includes("logo")
                  ? `${category.icon}`
                  : `${category.icon}-outline`
              }
            ></ion-icon>
            <a key={index} onClick={() => setId(category.id)}>
              {category.name}
            </a>
          </div>
        ))}
      </aside>

      <main className="video-container">
        {isPending && <h1>Loading...</h1>}
        {data && (
          <h1 className="displayed-videos">
            {id} <span className="videos-span">Videos</span>
          </h1>
        )}

        {/* {data?.items?.map((video, index) => (
            <a className="link-article" href={`/video/${video.id.videoId}`}>
              <Article
                key={index}
                thumbnail={video.snippet.thumbnails.default.url}
                title={video.snippet.title}
                chanel={video.snippet.channelTitle}
                time={formatDate(video.snippet.publishedAt)}
              />
            </a>
          ))} */}

        <Videos data={data} />
      </main>
    </section>
  );
}

const renderVideos = async (id) => {
  const url = `https://youtube-v31.p.rapidapi.com/search?q=${id}&part=snippet,id&maxResults=24&regionCode=US`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "b60812144cmsh92331a1a8e088d2p19c52ajsndad421260905",
      "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
    },
  };
  const response = await fetch(url, options);
  return await response.json();
};

// pages
//   home
//     components
//       header.jsx
//       videos.jsx
//   index.jsx
// api
// util
// components
//   ui
//     video.jsx
//     button.jsx
//   layout
//     navigation.jsx
//     footer.jsx

// napravi hijerarhiju fajlova
// napravi import alias (# "import button from "#components/ui/button"   ") napravi alias za components i pages
// napravi shared layout

export default Home;
