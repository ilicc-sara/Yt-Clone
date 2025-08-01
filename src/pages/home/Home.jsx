import Videos from "@/reusableComponents/Videos";
import CategoryButtons from "@/pages/home/components/CategoryButtons";
import { useOutletContext } from "react-router-dom";
import useGetVideos from "@/api/useGetVideos";

function Home() {
  const { id, setId } = useOutletContext();

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
