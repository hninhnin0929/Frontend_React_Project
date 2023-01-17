import React, { useCallback, useState, useMemo } from "react";

function expensiveFunc(a)
{
    console.log("Compute on a");
    return a;
}
export default function UseCallBackDemo()
{
    let [counter, setCounter] = useState(0);
    let [anotherState, setState] = useState({});
    let memonizedCallBack = useCallback(()=>{
        doSomething();
    }, [counter])//it creates doSomething func only if counteer state changee
    let data  = counter;
    let doSomething = ()=>{ //this func is recreated wheneveer render is called
        console.log("Do something "+ data);
        
    };
    const memorizedValue = useMemo(()=>expensiveFunc(counter), [counter]);
    console.log("memorizedValue", memorizedValue);
    return(<div>
        <h1>Use callback counter {counter}</h1>
        <button type="button"
                className="btn btn-primary"
                onClick={()=>setCounter(counter+1)}>
            Inc
        </button>
        <button type="button"
                className="btn btn-primary"
                onClick={()=>memonizedCallBack}>
            CallBack
        </button>
    </div>)
}