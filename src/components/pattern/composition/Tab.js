import React from "react";
import { PropTypes } from 'prop-types'
function TabBody(props)
{

}
function TabHeader(props)
{
    function headerClicked()
    {
        props.headerHandler(props.headerIndex);
    }
    return(
        <div className="tab-header" onClick={headerClicked}>
            {props.header}
        </div>
    );
}
TabHeader.propTypes = {
    headerIndex: PropTypes.number.isRequired,
    header: PropTypes.string.isRequired,
    headerHandler: PropTypes.func.isRequired
}
class Tab extends React.Component
{
   

    constructor(props)
    {
        super(props);

        this.state = {
            activeTab : 0
        }
    }
    headerClick(headerIndex)
    {
        console.log("Header Click", headerIndex, "this",this);
        this.setState({
            activeTab : headerIndex
        })
    }
    shouldComponentUpdate(nextProps, nextState)
    {
        return this.state.activeTab != nextState.activeTab;
    }
    render()
    {
        console.log("header ", this.props.headers);
        let activeChild = this.props.children[this.state.activeTab];
        return(
            <div>
                <div>
                    {
                        // this.props.headers.map(header=>{
                        //     return (
                        //         <div className="tab-header">
                        //             {header}
                        //         </div>
                        //     )
                        // })
                        this.props.headers.map((header, index)=>{
                            return (
                                <TabHeader header={header} 
                                headerIndex = {index}
                                headerHandler = {this.headerClick.bind(this)}/>                           )
                        })
                    }
                </div>
                <div className="tab-body">
                    {/* {this.props.children} */}
                    {/* {
                        this.props.children.map((child, index)=>{
                            return(

                            );
                        })
                    } */}
                    {activeChild}
                </div>
            </div>
            )
    }

}

export default Tab;