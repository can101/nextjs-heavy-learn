import styles from "./page.module.css";
import Test from "@/test";

export const getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
    // cache: "no-store",
    next: { revalidate: 10 },
  });
  return res.json();
};
// export const getOtherData2 = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts/2", {
//     // cache: "no-store",
//     next: { revalidate: 10 },
//   });
//   return res.json();
// };
// export const getOtherData3 = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts/3", {
//     cache: "no-store",
//     // next: { revalidate: 10 },
//   });
//   return res.json();
// };

export default async function Home() {
  const data = await getData();
  // const data2 = await getOtherData2();
  // const data3 = getOtherData3();
  // const dataResult = await Promise.all([data, data2, data3]);
  // console.log(dataResult);
  return (
    <>
      <div>Data Fetching: {data.title}</div>
      {/* <h1>Data2: {data2.title}</h1> */}
      <Test />
    </>
  );
}
