import React, {useState, useEffect} from "react";

// function APICallDemo()
// {
//     let [todo, setTodo] = useState({});
//     useEffect(()=>{
//         fetch("https://jsonplaceholder.typicode.com/todos/1")
//             .then(response=>response.json())
//         .then(json=>{setTodo(json)
//                 console.log("JSON ",json)})
//     },[])
//     return (<div>
//         {todo.title}
//     </div>);

// }

function useApiCall(setTodo) {
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos/1")
            .then(response => response.json())
            .then(json => {
                setTodo(json);
                console.log("JSON ", json);
            });
    }, []);
}

function APICallDemo()
{
    let [todo, setTodo] = useState({});
    useApiCall(setTodo);
    return (<div>
        {todo.title}
    </div>);

}


export default APICallDemo;



// this is just example, don't call api in component like this