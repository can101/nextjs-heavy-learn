import MovieContainer from "@/containers/movie";
import Movies from "@/mocks/movies.json";
import React from "react";
import { notFound } from "next/navigation";

async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default async function MoviePage({ params, searchParams }) {
  await delay(2000);
  const movieDetail = Movies.results.find(
    (movie) => movie.id.toString() === params.id
  );
  if (!movieDetail) {
    notFound();
  }
  if (searchParams.error == "true") {
    throw new Error("Error happend");
  }
  return <MovieContainer movie={movieDetail} />;
}
