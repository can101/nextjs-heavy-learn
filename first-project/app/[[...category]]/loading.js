import React from "react";
import CategoryLoading from "@/components/categories/loading";
import FeatureMovieLoading from "@/components/featured-movie/loading";
import MoviesSectionLoading from "@/components/movies-section/loading";

export default function CategoryPage() {
  return (
    <>
      <FeatureMovieLoading />
      <CategoryLoading />
      <MoviesSectionLoading />
      <MoviesSectionLoading />
      <MoviesSectionLoading />
    </>
  );
}
