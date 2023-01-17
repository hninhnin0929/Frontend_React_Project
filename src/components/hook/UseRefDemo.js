import React,{useRef, useLayoutEffect} from "react";

function UseRefDemo()
{
    console.log("Render");
    useLayoutEffect(()=>{
        console.log("called after render");
    })
    const inputEl = useRef(null);
    const onButtonClick = () => {
        // `current` points to the mounted text input element
        inputEl.current.focus();
    };
    console.log("return  JSX");
    return(
        <>
            <input ref={inputEl} type="text" />
            <button onClick={onButtonClick}> 
                Focus the input
            </button>
        </>
    );
}

export default UseRefDemo;