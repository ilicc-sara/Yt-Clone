import { useState } from "react";
import Videos from "@/UI/Videos";
import CategoryButtons from "@/pages/home/components/CategoryButtons";
import { useOutletContext } from "react-router-dom";
import useGetVideos from "@/api/useGetVideos";

function Home() {
  const { id, setId } = useOutletContext();

  const { data, isPending, error } = useGetVideos(id);

  const [showMobileNav, setShowMobileNav] = useState(false);

  return (
    <section>
      <ion-icon
        name="menu"
        className="menu-icon"
        onClick={() => setShowMobileNav(true)}
      ></ion-icon>
      <aside className="categories-cont">
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

      {showMobileNav && (
        <div className="categories-cont-mobile-nav">
          <ion-icon
            name="close"
            className="close-mobile-nav"
            onClick={() => setShowMobileNav(false)}
          ></ion-icon>
          <CategoryButtons id={id} setId={setId} />
        </div>
      )}
    </section>
  );
}

export default Home;
