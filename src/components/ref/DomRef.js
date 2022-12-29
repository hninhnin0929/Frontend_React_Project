import React from "react";

class DomRef extends React.Component
{
    constructor(props)
    {
        super(props);
        this.textInput = React.createRef();
    }
    focus()
    {
        console.log("this.textInput ", this.textInput);
        this.textInput.current.focus();
    }
    render(){
        console.log("txt Input ", this.textInput);
        return(
            <div>
                <form>
                    <input type="text"
                    className="form-control"
                    ref={this.textInput}></input>
                    <button type="button"
                    className="btn btn-primary"
                     onClick={this.focus.bind(this)}>Focus</button>
                </form>
            </div>
        )
    }
}

export default DomRef;