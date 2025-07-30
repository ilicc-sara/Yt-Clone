import Videos from "@/reusableComponents/Videos";
import CategoryButtons from "@/pages/home/components/CategoryButtons";
import { useQuery } from "@tanstack/react-query";
import { useOutletContext } from "react-router-dom";
import { videosResponse, trendingResponse } from "@/api/api";

function Home() {
  const { id, setId } = useOutletContext();
  // pokusaj da napravis poseban fajl useGetVideos.js
  // u tom fajlu treba pomeriti funkciju za dohvacanje videa od 11-14
  // i render videos funkcije
  // tako da u ovom fajlu (home) mozes uraditi :
  // const {data, isLoading....} = useGetVideos();
  // to se u reactu zove customHook
  const { data, isPending, isLoading, error, isFetching } = useQuery({
    queryKey: ["videos", id],
    queryFn: () => fetchVideos(id),
  });

  return (
    <section>
      <aside>
        <CategoryButtons id={id} setId={setId} />
      </aside>

      <main className="video-container">
        {isPending && <div className="loader"></div>}
        {error && <h1>Error...Something went wrong</h1>}
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

const fetchVideos = async (id) => {
  const url = `https://youtube-v31.p.rapidapi.com/search?q=${id}&part=snippet,id&maxResults=24&regionCode=US`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "2f21917738msha04edb7a701a4e8p148aafjsna4f42a08d4a0",
      "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
    },
  };
  const response = await fetch(url, options);
  return await response.json();

  // return trendingResponse;
};

export default Home;
