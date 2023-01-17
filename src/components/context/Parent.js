import React from "react";
import Level1Child from "./Level1Child";
import Level2Child2 from "./Level2Child2";

export default class Parent extends React.Component
{
    render(){
        return(
            <div>
                Parent Component
                {/* <Level1Child/> */}
                <Level2Child2/>
            </div>
        )
    }

}