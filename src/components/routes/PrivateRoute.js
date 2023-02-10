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

const PrivateRoute = ({ children, authenticate }) => {
  console.log("Private Route");
  console.log("auth =" , authenticate);
  console.log("childrean",children);
  // const authed = auth();
    const authed = authenticate;
    console.log("authneew =" , authed);
    return authed ? children : <Navigate to="/login"/>;
}

export default PrivateRoute;