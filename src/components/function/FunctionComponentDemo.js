import React from "react";

let user=()=>(
  <h3>User</h3>
)
let admin=()=>(
  <h3>Admin</h3>
)
let Child=()=>(<h3>
    This is child in ES6 Arrow Function
</h3>)
function FunctionComponent(){
    let role = 'user';
    let CurrentUser = role == 'user' ? user : admin;
    return (
      <div>
        Here is functional component.
        <Child/> 
        <CurrentUser/>
      </div> 
    );
}

export default FunctionComponent;