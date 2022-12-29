import { Fragment } from "react";

function TableRowComment({text})
{
    return(
        // <Fragment>
        <>
            <tr>
                <td>{text}</td>            
            </tr>
            <tr>
                <td>{text}</td>            
            </tr>
        </>
        // </Fragment>
    )
}
function TableDemo(props)
{
    console.log("Data ", props.data);
    return(
        <table>
            <thead>
                <tr>
                    <th>Comment</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.data.map(data=><TableRowComment text={data.text} key={data.id}/>)
                }
            </tbody>
        </table>
    )
}

export default TableDemo;