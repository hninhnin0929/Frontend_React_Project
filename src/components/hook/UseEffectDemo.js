import React, {useEffect, useState} from "react";

function UseEffectDemo(){

    let [counter,setCounter] = useState(0);
    useEffect(()=>{
        console.log("API call code");
        let timer = setInterval(()=>{
            console.log("Set interval");
            setCounter(counter+1);
        }, 1000);
        return ()=>{
            console.log("Cleanup code");    //will run in destroy
            clearTimeout(timer);
        }
    }, [])  //empty list param means "run only once"
    return(<div>
        UseEffect Clean up Demo {counter}
    </div>)
}

export default UseEffectDemo;

//usage pattern
// useEffect = useEffect(()=>{

// }) //component did mount+ component did update
// useEffect = useEffect(()=>{
//     return()=>{}    //cleanup
// })
// useEffect = useEffect(()=>{

// }, [statevariable]) //run effct only if state var change