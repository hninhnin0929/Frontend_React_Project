import React from "react";

class FormDemo extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            name : ""
        }
    }
    // nameCh
    render()
    {
        return(
            <div className="container col-6">
                <form>
                    <div className="mb-3">
                        <label className="form-label">
                            Name:                            
                        </label>
                        <input type="text" name="name" className="form-control"/>
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