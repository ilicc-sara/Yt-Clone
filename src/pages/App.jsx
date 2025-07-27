import { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";

function App() {
  const [input, setInput] = useState("");
  // const { id, setId } = useOutletContext();

  // function submitForm(e) {
  //   e.preventDefault();
  //   setId(input);
  //   setInput("");
  // }

  return (
    <>
      <nav>
        <Link className="home-link" to="/">
          <div className="yt-logo">
            <img className="logo" src="./youtubeLogo.png" />
            <h1 className="youtube" href="#">
              YouTube
            </h1>
          </div>
        </Link>

        <form className="search-form">
          <input
            className="search-input"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Search..."
          />
          <button className="btn-input">🔎</button>
        </form>
      </nav>

      {/* <Home /> */}
    </>
  );
}

export default App;
