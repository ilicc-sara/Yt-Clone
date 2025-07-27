import { useState } from "react";
import "@/App.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function App(props) {
  const [input, setInput] = useState("");
  const { id, setId } = props;
  const navigate = useNavigate();

  function submitForm(e) {
    e.preventDefault();
    navigate("/");
    setInput("");
    setId(input);
  }

  console.log(id);

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

        <form onSubmit={submitForm} className="search-form">
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
    </>
  );
}

export default App;
