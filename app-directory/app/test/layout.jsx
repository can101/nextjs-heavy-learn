import React from "react";

export default function TestLayout({children}){
    return (
        <div>
            <h1>I am a test layout</h1>
            <div>{children}</div>
        </div>
    )
}