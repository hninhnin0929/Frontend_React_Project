import React from "react";
import loadingSpinner from './LoadingSpinner';
import Page from './Page';

let PageWithSpinner = loadingSpinner(Page);

export default class HocDemo extends React.Component
{
    constructor(props){
        super(props);
        this.state = {
            loading: true
        }
    }
    componentDidMount(){    //call api here
        setTimeout(() => {
            console.log("Loading Completed hOC DEMO")
            this.setState({
                loading: false
            })
        }, 3000);
    }
    render(){        
        return <PageWithSpinner loading={this.state.loading}/>;
    }
}