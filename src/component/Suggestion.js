import SuggestionLink from "./SuggestionLink";
import "./Suggestion.css";

export default function Suggestion({ suggestions }) {
  if (!suggestions) return null;

  return (
    <div className="suggestion">
      {suggestions.map((suggestion, index) => (
        <SuggestionLink key={index} suggestion={suggestion} />
      ))}
    </div>
  );
}
