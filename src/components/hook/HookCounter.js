import React, {useState, useEffect} from "react";

function HookCounter()
{
    const [counter, setCounter] = useState(0);//useState=hook
    const  [words, setWords] = useState(['One']);

    useEffect(() => {
        console.log("Execute effect");
        document.title = `You clicked ${counter} times`;
    },[counter]); //second param is for 'run useeffect only if counter change

    return(
        <div>
            <h1>Counter {counter}</h1>
            <h1>Words {words.join(' ')}</h1>
            <button type="button" 
                    className="btn btn-primary"
                    onClick={()=>setCounter(counter+1)}>
               Inc     
            </button>
            <button type="button" 
                    className="btn btn-primary"
                    onClick={()=>setWords(words.concat('Two'))}>
               Add Words   
            </button>
        </div>
    )
}
export default HookCounter;



// this.state = {              ==counter
//     counter : 0
// }

// this.setState({             ==setCounter
//     counter : counter + 1
// })