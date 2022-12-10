import React from "react";

class FormDemo extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            title : "",
            description : "",
            genre : ""
        }
        this.handleTitleChange = this.handleTitleChange.bind(this);   //bind with current obj
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleGenreChange = this.handleGenreChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleTitleChange(event)
    {
        console.log("Event ", event.target.value);
        console.log("this ", this);     //undefiend
        this.setState({
            title : event.target.value
        })
    }
    handleDescriptionChange(event)
    {
        console.log("Event ", event.target.value);
        console.log("this ", this);     //undefiend
        this.setState({
            description : event.target.value
        })
    }
    handleGenreChange(event)
    {
        console.log("Event ", event.target.value);
        console.log("this ", this);     //undefiend
        this.setState({
            genre : event.target.value
        })
    }
    handleSubmit(event){
        console.log("Form submit", this.state);
        event.preventDefault();//not to reload
        
    }
    render()
    {
        return(
            <div className="container col-6">
                <form onSubmit={this.handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">
                            Name:                            
                        </label>
                        <input type="text" name="name" className="form-control"
                        value={this.state.title}
                        onChange={(event)=>this.handleTitleChange(event)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">
                            Description:                            
                        </label>
                        <textarea id="description" className="form-control"
                        value={this.state.description}
                        onChange={(event)=>this.handleDescriptionChange(event)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="genre" className="form-label">
                        Genre:                            
                        </label>
                        <select id="genre" className="form-control"
                        value={this.state.genre} onChange={(event)=>this.handleGenreChange(event)}>
                            <option>Si-Fi</option>
                            <option>Crime</option>
                            <option selected>Drama</option>
                            <option>Rumor</option>
                        </select>
                    </div>
                    <div className="">
                        <input type="submit" className="btn btn-primary" value="Submit"></input>
                    </div>
                </form>
            </div>
        )
    }
}
export default FormDemo;