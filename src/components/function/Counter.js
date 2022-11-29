import React from "react";

class Counter extends React.Component
{   
    constructor(props)
    {
        super(props);
        this.state = {
            // count : 0
            count : this.props.start
        };
        console.log("Counter constructor called");
    }
    increment()
    {
        this.setState({
            count : this.state.count + 1
        })
    }
    decrement()
    {
        this.setState({
            count : this.state.count - 1
        })
    }
    componentDidMount()
    {
        console.log("Component did mount Counter");
    }
    render()
    {
        console.log("Render counter");
        return(
            <div className="counter">
                <button className="btn btn-primary"  
                    onClick={()=>this.increment()}>
                    +
                </button>
                <h3>{this.state.count}</h3>
                <button className="btn btn-primary" 
                    onClick={()=>this.decrement()}>
                    -
                </button>
            </div>
        )
    }
}

export default Counter;