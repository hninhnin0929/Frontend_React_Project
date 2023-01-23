import React from "react";
import {
    BrowserRouter as Router,
    // Switch,
    Routes,
    Route,
    Link,
     
  } from "react-router-dom";
import SubUser from "./SubUser";

export default function UserPage(){

    
    return <div>
        User Page
        <ul>
            <li>
                <Link to="admin" >Admin</Link>
            </li>
            <li>
                <Link to="user/Hnin">User</Link>
            </li>
        </ul>
        <Routes>
            <Route path="admin" element={
              <h3>Please select a topic.</h3>
            }>
            </Route>
            <Route path="user/:userName" element={
              <SubUser/>
            }> 
            </Route>
        </Routes>
    </div>
}