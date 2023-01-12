import React from "react";

export default class ListOfWord extends React.PureComponent
{
    constructor(props)
    {
        super(props);
        this.state = {
            words: ["One"]
        }
        this.add = this.add.bind(this);
    }
    add()
    {
        let words = this.state.words;
        // let words = [...this.state.words];//make new array- problem solved!
        words.push("Two");
        this.setState({
            words
        })
    }
    render()
    {
        console.log("Render ");
        return (
            <div>
                {this.state.words.join(',')}
                <button type="button" className="btn btn-primary"
                 onClick={this.add}>Add</button>
            </div>
        );

    }
}