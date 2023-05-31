import React from "react";

export default function TestPage({searchParams}){
    if(searchParams.error=="true"){
        throw new Error("this is an error");
    }
    return <div>Test Page</div>
}