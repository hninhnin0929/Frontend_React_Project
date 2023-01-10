import React from "react";

const Mapper = (props)=>{
    let data = props.data;
    let Element = props.element;
    console.log("Element ", Element);
    let List =  data.map(ele=><Element {...props}/>)
    return (
        <>
            {
                List
            }
        </>
    )
}
export const ChildElement = (props)=>{
    return(
        <div>
            Data
        </div>
    )
}

export default Mapper;