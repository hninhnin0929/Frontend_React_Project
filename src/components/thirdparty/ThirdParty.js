import React from "react";
import $ from "jquery";
import select2 from "select2";

export default class ThirdParty extends React.Component{

    componentDidMount(){
        this.$el = $(this.el);  //el=dom element
        this.$el.select2();
    }
    componentWillUnmount(){
        this.$el.select2('destroy');
    }
    render(){
        return(
            <div>
                {/* <input type="text" ref={el => this.el = el }/> */}
                <select className="js-example-basic-multiple"
                    name="states[]" multiple="multiple"
                    ref={el => this.el = el}>
                    <option value="AL">Alabama</option>
                    <option value="WY">Wyoming</option>
                </select>
            </div>

        );
    }
}