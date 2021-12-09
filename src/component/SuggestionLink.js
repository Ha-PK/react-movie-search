import { useContext } from "react";
import AppContext from "../context/AppContext";

export default function SuggestionLink({ suggestion }) {
  const { handleClick } = useContext(AppContext);
  return (
    <div className="suggestion-link" onClick={() => handleClick(suggestion)}>
      {suggestion.l}
    </div>
  );
}
