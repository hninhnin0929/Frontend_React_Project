import React from "react";
import {
    BrowserRouter as Router,
    // Switch,
    Routes,
    Route,
    Link,
    useParams
  } from "react-router-dom";

export default function SubUser(){
    let {userName} = useParams();

    return(
        <div>
            <h3> SubUser {userName}</h3>
        </div>
    )
}