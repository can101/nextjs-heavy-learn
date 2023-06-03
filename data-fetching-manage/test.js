export const getOtherData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/2", {
      // cache: "no-store",
      next: { revalidate: 10 },
    });
    return res.json();
  };

  
export default async function Test() {
    const data2 = await getOtherData();
    return (
      <>
        <div>Data2: {data2.title}</div>
      </>
    );
  }