import React from "react";

export default function AboutLayout({children,...rest}){
    console.log("rr",rest);
    return (
        <div>
            <h2>I am a about layout</h2>
            <div>{children}</div>
        </div>
    )
}