import React from "react";
import {notFound} from "next/navigation";

export default function TestPage({searchParams}){
    if(searchParams.error=="true"){
        throw new Error("this is an error");
    }
    if(searchParams.test=="true"){
        notFound();
    }
    return <div>Test Page</div>
}