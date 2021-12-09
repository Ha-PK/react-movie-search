import axios from "axios";

export default function fetchMovie(search) {
  const options = {
    method: "GET",
    url: "https://imdb8.p.rapidapi.com/auto-complete",
    params: { q: search },
    headers: {
      "x-rapidapi-host": "imdb8.p.rapidapi.com",
      "x-rapidapi-key": "731fee2299msh3798175aeba30f4p141f2fjsn939f2b3a2351",
    },
  };

  return axios.request(options);
}
