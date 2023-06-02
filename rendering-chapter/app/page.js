"use client";
import { useEffect } from "react";
import styles from "./page.module.css";
// import Button from "@/components/button";

export default function HomePage() {
  useEffect(() => {
    console.log("hleeooo useffect");
  }, []);
  return (
    <>
      <div>Home Page</div>
      {/* <Button /> */}
    </>
  );
}
