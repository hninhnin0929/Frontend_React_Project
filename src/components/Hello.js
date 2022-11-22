import { type } from "@testing-library/user-event/dist/type";
import React from "react";

function toUpper(msg){
  return msg.toUpperCase();
}
function footer(){
  return <div className="gray-header">
    footer
  </div>
}
function Hello() {
  let name = 'Snow';
  let data = true;

  const element = React.createElement(  //should not be used
     'h1',
     {className: 'greeting'},
     'Hello, World!'
  );

  if(data)
  {
    return (
      <div>
        <h1>Hello Component {toUpper(name)}</h1>
        {element}
        {
          footer()
        }
      </div>
    );
  }
  else
  {
    return (<div>No data</div>)
  }
}


  export default Hello;