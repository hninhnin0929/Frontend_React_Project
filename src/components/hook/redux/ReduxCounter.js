import React,{useReducer,useState} from "react";

let initialState = {
    items : ["one","two","three"],
    count : 0
};
function reducer(state, action)
{
    console.log('reducer state ', state, ' action ', action);
    switch(action.type){
        case 'increment':
            //state.count = state.count+1 //cannot be used like this becoz of FP
            return {
                ...state,   //not to disappear items
                count : state.count + 1 //items disappear when state change
            };
        case 'decrement':
            return {
                ...state,   //not to disappear items
                count : state.count - 1
            };
        default:
            throw new Error("Unknown action type");
    }
}
export default function ReduxCounter()
{
    let [state, dispatch] = useReducer(reducer, initialState);
    return(
        <div>
            <h1>{state.count}</h1>
            {
                state.items.join(" ")   //items disappear when state change
            }
            <button type="button"
                    className="btn btn-primary"
                    onClick={()=>dispatch({
                        type: 'increment'
                    })}>
                Inc
            </button>
            <button type="button"
                    className="btn btn-primary"
                    onClick={()=>dispatch({
                        type: 'decrement'
                    })}>
                Dec
            </button>
        </div>
    )
}
// export default function ReduxCounter()
// {
//     let [counter, setCounter] = useState(0);
//     let incCounter = ()=> setCounter(counter+1);
//     let decCounter = ()=> setCounter(counter-1);
//     return(
//         <div>
//             <h1>{counter}</h1>
//             <button type="button"
//                     className="btn btn-primary"
//                     onClick={()=>incCounter()}>
//                 Inc
//             </button>
//             <button type="button"
//                     className="btn btn-primary"
//                     onClick={()=>decCounter()}>
//                 Dec
//             </button>
//         </div>
//     )
// }
