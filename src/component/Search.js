import { useRef } from "react";
import "./Search.css";

export default function Search({ searchInput, handleTyping }) {
  const inputEl = useRef(null);

  return (
    <div className="search">
      <input
        value={searchInput}
        onChange={() => handleTyping(inputEl.current.value)}
        ref={inputEl}
        className="search-input"
        type="text"
        name="search"
        autoComplete="off"
        placeholder="Search here..."
      />
    </div>
  );
}
