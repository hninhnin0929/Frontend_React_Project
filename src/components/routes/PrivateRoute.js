import {
    BrowserRouter as Router,
    // Switch,
    Routes,
    Route,
    Link,
    // Redirect
    Navigate 
  } from "react-router-dom";
  import auth from "../../pages/auth";

//   export default function PrivateRoute({ children, ...rest}){
// //...rest= params that not children
//     return(
//         <Routes>
//             <Route
//                 {...rest}
//                 render={({ location }) =>
//                     auth() ? (
//                         children
//                     ): (
//                         <Navigate
//                             to={{
//                                 pathname: "/login",
//                                 state: { from: location }
//                             }}
                            
//                         />
//                     )
//                 }

//             />
//         </Routes>
        
//     )
//   }

const PrivateRoute = ({ childdren }) => {
    const authed = auth();
    return authed ? childdren : <Navigate to="/login"/>
}

export default PrivateRoute;