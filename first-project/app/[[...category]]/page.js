import HomeContainer from "@/containers/home";
import Movies from "@/mocks/movies.json";
async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
export default async function HomePage({ params }) {
  await delay(20000);
  let slectedCategory;
  if (params.category?.length > 0) {
    slectedCategory = true;
  }
  return (
    <HomeContainer
      slectedCategory={{
        id: params.category?.[0] ?? "",
        movies: slectedCategory ? Movies.results.slice(0, 7) : [],
      }}
    />
  );
}
