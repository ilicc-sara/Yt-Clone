import Videos from "@/components/Videos";
import CategoryButtons from "@/components/CategoryButtons";
import { useQuery } from "@tanstack/react-query";
import { useOutletContext } from "react-router-dom";
import { videosResponse, trendingResponse } from "@/api/api";

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
        <CategoryButtons id={id} setId={setId} />
      </aside>

      <main className="video-container">
        {isPending && <h1>Loading...</h1>}
        {error && <h1>Error</h1>}
        {data && (
          <h1 className="displayed-videos">
            {id} <span className="videos-span">videos</span>
          </h1>
        )}

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
      "x-rapidapi-key": "96e63d6a9dmsh343f9a787999921p182641jsnb26da9452b9e",
      "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
    },
  };
  const response = await fetch(url, options);
  return await response.json();

  // return trendingResponse;
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
