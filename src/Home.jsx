import React, { useState } from "react";
import Videos from "./Videos";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

function Home() {
  const [input, setInput] = useState("");

  const [categories, setCategories] = useState([
    { icon: "home", name: "Home", id: "New" },
    { icon: "flame", name: "Trending", id: "Trending" },
    { icon: "code-slash", name: "Coding", id: "coding" },
    { icon: "logo-javascript", name: "Javascript", id: "java%script" },
    { icon: "logo-react", name: "ReactJS", id: "reactJS" },
    { icon: "musical-notes", name: "Music", id: "music" },
    { icon: "book", name: "Education", id: "education" },
    { icon: "mic", name: "Podcast", id: "podcast" },
    { icon: "film", name: "Movie", id: "movie" },
    { icon: "game-controller", name: "Gaming", id: "gaming" },
    { icon: "pulse", name: "Live", id: "live" },
    { icon: "football", name: "Sport", id: "sport" },
    { icon: "sparkles", name: "Fashion", id: "fashion" },
    { icon: "diamond", name: "Beauty", id: "beauty" },
  ]);

  const [id, setId] = useState(categories[0].id);

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
  const response = await fetch(
    `https://youtube-v31.p.rapidapi.com/search?q=${id}&part=snippet,id&maxResults=24&regionCode=US`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-key": "be6fa48021msh06130b56f1fc57bp1a07f5jsn0641dee67229",
        "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
      },
    }
  );
  return await response.json();
};

export default Home;
