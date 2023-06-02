"use client";
import React, { useEffect } from "react";

function Input({ children }) {
  useEffect(() => {
    console.log("Input");
  }, []);
  return <div>Input {children}</div>;
}

export default Input;
