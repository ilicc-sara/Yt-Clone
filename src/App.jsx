import { useState, useEffect } from "react";

import Videos from "./Videos";
import "./App.css";

import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import Home from "./Home";

function App() {
  const [input, setInput] = useState("");

  return (
    <>
      <nav>
        <div className="yt-logo">
          <img className="logo" src="./youtubeLogo.png" />
          <h1 className="youtube" href="#">
            YouTube
          </h1>
        </div>

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

      <Home />
    </>
  );
}

export default App;
