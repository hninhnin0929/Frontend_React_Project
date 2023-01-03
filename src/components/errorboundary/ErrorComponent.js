import React from "react";

export default class ErrorComponent extends React.Component
{
    constructor(props){
        super(props);
        this.onClickHandler = this.onClickHandler.bind(this);
        this.state = {
            count : 0
        }
    }
    componentDidMount()
    {
        window.addEventListener("click", (e)=>{
            console.log("Click on window");
        });
    }
    onClickHandler(){
        console.log("Button clicked");
        this.setState({
            count : this.state.count + 1
        })
        // throw new Error("Created error");
    }
    render(){
        console.log("Render ");
        if(this.state.count == 5)
        {
            throw new Error("Created error");
        }
        return(
            <div>
                <button type="button" onClick={this.onClickHandler}
                className="btn btn-primary">{this.state.count}</button>
            </div>
        )
    }
}