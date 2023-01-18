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
        case 'DELETE-TO-DO':
            return {
                ...state,
                items: state.items.filter(item=>item.id != action.payload.id)
            }
        case 'UPDATE-TO-DO':
            return {
                ...state,
                items: state.items.map(item=>item.id == action.payload.id?
                                        {
                                            ...item,
                                            text: action.payload.text
                                        }
                                        : item)
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
    let deleteHandler= (item)=>{
        console.log("delete handler ", item);
        let deleteAction = {
            type: 'DELETE-TO-DO',
            payload: item
        };
        dispatch(deleteAction);
    }
    let updateHandler = (item=>{
        console.log("update handler1 ", item);
        let payload = {...item};    //copy => to safe
        payload.text = newItem;
        console.log("update handler2 ", payload);
        let updateAction = {
            type: 'UPDATE-TO-DO',
            payload //key=payload, value=payload, it's same.
        };
        dispatch(updateAction);
        setNewItem("");
    })
    return(<div>
        <div>
            <input type="text"
                    value={newItem}
                    onChange={(e)=>setNewItem(e.target.value)}
                    className="form control col-sm-6"></input>
            <button type="button"
                    onClick={addHandler}
                    className="btn btn-primary col-sm-1">
                        Add
            </button>
        </div>
        {
            state.items.map(item=>
            <div className="row">
                <div className="col-sm-6">
                    {item.text}
                </div>
                <button type="button"
                        className="btn btn-primary col-sm-1"
                        onClick={()=>deleteHandler(item)}>
                    Delete
                </button>
                <button type="button"
                        className="btn btn-primary col-sm-1"
                        onClick={()=>updateHandler(item)}>
                    Update
                </button>
            </div>)
        }
    </div>)
}