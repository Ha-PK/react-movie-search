import { useState, useEffect } from "react";
import Banner from "./Banner";
import Search from "./Search";
import Suggestion from "./Suggestion";
import Body from "./Body";
import Footer from "./Footer";
import AppContext from "../context/AppContext";
import fetchMovie from "../logic/fetchMovie";
import "./App.css";

export default function App() {
  const [input, setInput] = useState("");
  const [suggestions, setSuggestion] = useState(null);
  const [current, setCurrent] = useState(null);

  console.log(suggestions);

  useEffect(() => {
    if (input === "") {
      setSuggestion(null);
      return;
    }

    let timeout = setTimeout(() => handleSearch(input), 500);

    return () => clearTimeout(timeout);
  }, [input]);

  async function handleSearch(search) {
    const response = await fetchMovie(search);

    if (
      response &&
      response.data &&
      response.data.d &&
      response.data.d.length
    ) {
      setSuggestion(response.data.d.slice(0, 10));
    }
  }

  function handleTyping(value) {
    setInput(value);
  }

  function handleClick(film) {
    setSuggestion(null);
    setCurrent(film);
  }

  return (
    <AppContext.Provider value={{ handleClick }}>
      <div className="app">
        <Banner current={current} />

        <div className="app-container">
          <div className="app-header">
            <Search searchInput={input} handleTyping={handleTyping} />
            <Suggestion suggestions={suggestions} />
          </div>
          <div className="app-body">
            <Body />
          </div>
          <div className="app-footer">
            <Footer />
          </div>
        </div>
      </div>
    </AppContext.Provider>
  );
}
