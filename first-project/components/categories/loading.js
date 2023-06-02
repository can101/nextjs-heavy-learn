import React from "react";
import Skeleton from "@/components/skeleton";
import styles from "./styles.module.css";

export default function CategoriesLoading() {
  return (
    <div className={styles.categories}>
      {[...Array(5).keys()].map((_, index) => (
        <Skeleton key={index} height={72} />
      ))}
    </div>
  );
}
