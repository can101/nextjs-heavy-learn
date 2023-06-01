import React from "react";
import Head from "next/head"

export default function TestLayout({children}){
    return (
        <div>
             <Head>
                <title>My page title</title>
            </Head>
            <h1>I am a test layout</h1>
            <div>{children}</div>
        </div>
    )
}