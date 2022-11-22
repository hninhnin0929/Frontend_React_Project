import React from "react";

let Child=()=>(<h3>
    This is child in ES6 Arrow Function
</h3>)
function FunctionComponent(){

    return (
      <div>
        Here is functional component.
        <Child/> 
      </div> 
    );
}

export default FunctionComponent;