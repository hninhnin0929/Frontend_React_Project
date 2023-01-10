import React from "react";

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
                <input type="text" ref={el => this.el = el }/>
            </div>
        );
    }
}