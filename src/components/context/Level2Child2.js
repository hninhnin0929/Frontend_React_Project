import React,{useContext} from "react";
import { DataContext } from "./DataContext";

function Level2Child2()
{
    const value = useContext(DataContext);
    return(
        <div>
            Level 2 Child 2 Component
            {
                value.map((val,index)=>
                    <div key={index}>{val}</div>             
                )
            }
        </div>
    )
}

export default Level2Child2;