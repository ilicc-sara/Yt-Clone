import Videos from "@/reusableComponents/Videos";
import CategoryButtons from "@/pages/home/components/CategoryButtons";
import { useQuery } from "@tanstack/react-query";
import { useOutletContext } from "react-router-dom";
import { videosResponse, trendingResponse } from "@/api/api";
import useGetVideos from "./useGetVideos";

function Home() {
  const { id, setId } = useOutletContext();
  // pokusaj da napravis poseban fajl useGetVideos.js
  // u tom fajlu treba pomeriti funkciju za dohvacanje videa od 11-14
  // i render videos funkcije
  // tako da u ovom fajlu (home) mozes uraditi :
  // const {data, isLoading....} = useGetVideos();
  // to se u reactu zove customHook

  const { data, isPending, error } = useGetVideos(id);

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

export default Home;
