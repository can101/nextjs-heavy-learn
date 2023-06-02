import React from "react";

export default function IdPage({ params }) {
  console.log("id page", params.id);
  return (
    <>
      <div>Id Page : {params.id}</div>
    </>
  );
}
