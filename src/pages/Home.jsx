import Videos from "@/components/Videos";
import CategoryButtons from "@/components/CategoryButtons";
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
      "x-rapidapi-key": "5430da9b3amsh7f5f8ace412dea8p137c8djsn5d13d562d790",
      "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
    },
  };
  const response = await fetch(url, options);
  return await response.json();

  // return trendingResponse;
};

export default Home;
