import React, {useReducer, useState} from "react";

let initialState = {
    items : [{id: 1, text: "one"},
    {id: 2, text: "Two"},
    {id: 3, text: "Three"}],
    count : 0
};
function reducer(state, action)
{
    console.log("state.items", state.items);
    console.log("action.payload", action.payload);
    switch(action.type){
       
        case 'ADD-TO-DO':
            return {
                ...state,
                items: [...state.items, action.payload]
            }
        default:
            throw new Error("invalid action type ", action.type);
    }
    return state;
}

export default function ToDoRedux(){
    let [state, dispatch] = useReducer(reducer, initialState);
    let [newItem, setNewItem] = useState('');
    console.log('New Item ', newItem);

    let addHandler = ()=>{
        console.log("Add ", newItem);
        let addAction = {
            type: 'ADD-TO-DO',
            payload: {
                text: newItem
            }
        };
        dispatch(addAction);
        setNewItem("");
    }
    return(<div>
        <div>
            <input type="text"
                    value={newItem}
                    onChange={(e)=>setNewItem(e.target.value)}
                    className="form control"></input>
            <button type="button"
                    onClick={addHandler}
                    className="btn btn-primary">
                        Add
            </button>
        </div>
        {
            state.items.map(item=><div>{item.text}</div>)
        }
    </div>)
}