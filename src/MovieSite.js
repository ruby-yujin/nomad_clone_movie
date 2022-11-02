import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";

function MovieSite() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMoives = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
    );
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  console.log(movies);
  useEffect(() => {
    getMoives();
  }, []);

  return <div>{loading ? <h1>loading...</h1> : null}</div>;
}

export default MovieSite;
