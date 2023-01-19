var express = require("express");
var router = express.Router();
const fetch = require("node-fetch");

const OWM_API_KEY = process.env.OWM_API_KEY;
const baseURL = "https://api.themoviedb.org/3";
const requests = {
  fetchTrending: `/trending/all/week?api_key=${OWM_API_KEY}&language=en-US`,
  fetchNetflixOriginalsTv: `/discover/tv?api_key=${OWM_API_KEY}&with_networks=213`,
  fetchNetflixOriginalsMovies: `/discover/movie?api_key=${OWM_API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${OWM_API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${OWM_API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${OWM_API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${OWM_API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${OWM_API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${OWM_API_KEY}&with_genres=99`,
};

router.get("/movieById/:id", (req, res) => {
  const movieId = req.params.id;
  const url = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${OWM_API_KEY}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      res.json(data);
    });
});

router.get("/allMovies", (req, res) => {
  const requestsArray = [
    fetch(`${baseURL}${requests.fetchTrending}`),
    fetch(`${baseURL}${requests.fetchNetflixOriginalsTv}`),
    fetch(`${baseURL}${requests.fetchNetflixOriginalsMovies}`),
    fetch(`${baseURL}${requests.fetchTopRated}`),
    fetch(`${baseURL}${requests.fetchActionMovies}`),
    fetch(`${baseURL}${requests.fetchComedyMovies}`),
    fetch(`${baseURL}${requests.fetchHorrorMovies}`),
    fetch(`${baseURL}${requests.fetchRomanceMovies}`),
    fetch(`${baseURL}${requests.fetchDocumentaries}`),
  ];

  Promise.all(requestsArray)
    .then((responses) => Promise.all(responses.map((res) => res.json())))
    .then((data) => {
      const [
        fetchTrending,
        fetchNetflixOriginalsTv,
        fetchNetflixOriginalsMovies,
        fetchTopRated,
        fetchActionMovies,
        fetchComedyMovies,
        fetchHorrorMovies,
        fetchRomanceMovies,
        fetchDocumentaries,
      ] = data;
      res.json({
        fetchTrending: fetchTrending.results,
        fetchNetflixOriginalsTv: fetchNetflixOriginalsTv.results,
        fetchNetflixOriginalsMovies: fetchNetflixOriginalsMovies.results,
        fetchTopRated: fetchTopRated.results,
        fetchActionMovies: fetchActionMovies.results,
        fetchComedyMovies: fetchComedyMovies.results,
        fetchHorrorMovies: fetchHorrorMovies.results,
        fetchRomanceMovies: fetchRomanceMovies.results,
        fetchDocumentaries: fetchDocumentaries.results,
      });
    })
    .catch((err) => {
      console.error(err);
      res.json({
        error: "An error occured while trying to retrieve the movie data",
      });
    });
});

router.get("/fetchTrending", (req, res) => {
  fetch(`${baseURL}${requests.fetchTrending}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data.results);
      res.json(data.results);
    });
});

router.get("/fetchNetflixOriginalsTv", (req, res) => {
  fetch(`${baseURL}${requests.fetchNetflixOriginalsTv}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data.results);
      res.json(data.results);
    });
});

router.get("/fetchNetflixOriginalsMovies", (req, res) => {
  fetch(`${baseURL}${requests.fetchNetflixOriginalsMovies}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data.results);
      res.json(data.results);
    });
});

router.get("/fetchTopRated", (req, res) => {
  fetch(`${baseURL}${requests.fetchTopRated}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data.results);
      res.json(data.results);
    });
});

router.get("/fetchActionMovies", (req, res) => {
  fetch(`${baseURL}${requests.fetchActionMovies}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data.results);
      res.json(data.results);
    });
});

router.get("/fetchComedyMovies", (req, res) => {
  fetch(`${baseURL}${requests.fetchComedyMovies}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data.results);
      res.json(data.results);
    });
});

router.get("/fetchHorrorMovies", (req, res) => {
  fetch(`${baseURL}${requests.fetchHorrorMovies}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data.results);
      res.json(data.results);
    });
});

router.get("/fetchRomanceMovies", (req, res) => {
  fetch(`${baseURL}${requests.fetchRomanceMovies}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data.results);
      res.json(data.results);
    });
});

router.get("/fetchDocumentaries", (req, res) => {
  fetch(`${baseURL}${requests.fetchDocumentaries}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data.results);
      res.json(data.results);
    });
});
module.exports = router;
