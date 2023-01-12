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
    // console.log("Item ", props.item);
    console.log("Item ", props);
    return(
        <div>
            {/* {props.item.text} */}
            Hi
        </div>
    )
}

export default Mapper;