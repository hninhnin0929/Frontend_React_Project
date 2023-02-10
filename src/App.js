//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hello from './components/Hello';
import VirtualDomConcept from './components/VirtualDomConcept';
import FunctionComponent from './components/function/FunctionComponentDemo';
import ClassComp from './components/classcomponent/ClassComp';
import Post from './components/function/Post';
import Counter from './components/function/Counter';
import TimeDisplay from './TimeDisplay';
import ConditionalRendering from './components/ConditionalRendering';
import ListDemo from './ListDemo';
import FormDemo from './form/FormDemo';
import FancyBorder from './components/pattern/composition/FuncyBorder';
import Tab from './components/pattern/composition/Tab';
import TableDemo from './components/fragment/TableDemo';
import ImportDemo,{ComponentOne} from "./components/importdemo/ImportDemo"; //default import, name import
import DomRef from './components/ref/DomRef';
import { Suspense, useEffect } from 'react';
// import PointerEvent from './components/pointerevent/PointerEvent';
import React from 'react';
import ErrorBoundary from './components/errorboundary/ErrorBoundary';
import ErrorComponent from './components/errorboundary/ErrorComponent';
import { DataContext } from './components/context/DataContext';
import Parent from './components/context/Parent';
import ForwardRef from './components/ref/ForwardRef';

import loadingSpinner from './components/hoc/LoadingSpinner';
import Page from './components/hoc/Page';
import HocDemo from './components/hoc/HocDemo';
import MouseTracker, { View1, View2 } from './components/render-props/MouseTracker';
import ThirdParty from './components/thirdparty/ThirdParty';
import JSXElement from './components/jsx/JSXElement';
import Mapper, {ChildElement} from './components/jsx/Mapper';
import PureCounter from './components/PureCounter';
import ListOfWord from './components/ListOfWord';
import { PortalParent } from './components/portal/PortalComponent';
import HookCounter from './components/hook/HookCounter';
import UseEffectDemo from './components/hook/UseEffectDemo';
import CleanUpDemo from './components/hook/CleanUpDemo';
import APICallDemo from './components/hook/APICallDemo';
import UseCallBackDemo from './components/hook/UseCallBack';
import UseRefDemo from './components/hook/UseRefDemo';
import ReduxCounter from './components/hook/redux/ReduxCounter';
import ToDoRedux from './components/hook/redux/ToDoRedux';
import FormikDemo from './form/FormikDemo';
import {
  BrowserRouter as Router,
  // Switch,
  Routes,
  Route,
  Link
} from "react-router-dom";
import AboutPage from './pages/AboutPage';
import UserPage from './pages/UserPage';
import HomePage from './pages/HomePage';
import MoviePage from './pages/MoviePage';
import LoginPage from './pages/LoginPage';
import ProtectedPage from './pages/ProtectedPage';
import PrivateRoute from './components/routes/PrivateRoute';
import auth from './pages/auth';
import PageNotFound from './pages/PageNotFound';



const PointerEvent = React.lazy(()=> import('./components/pointerevent/PointerEvent'));
function App() {
  
  let data = {
    "title": "This is first post",
    "body": "This is first post description",
    comments: [
                {id:1, text: "This is first comment "}, 
                {id:2, text: "This is second comment "}
              ]
  }
  let headers = [
    "one",
    "two",
    "three"
  ]
  // let PageWithSpinner = loadingSpinner(Page);

  let loading = true;
  useEffect(()=>{
    setTimeout(() => {
      console.log("Loading completed!");
      loading = false;
    }, 5000);
  })

  let user = "admin";

  return (
    <div>
      <header>
        Hello From React
      </header>
{/*       <Hello></Hello>
      <Hello/> */}
      {/* <VirtualDomConcept></VirtualDomConcept> */}
      {/* <FunctionComponent/> */}
      {/* <ClassComp/> */}
      {/* <Post post={data}/> */}
      {/* <Counter start={5}/> */}
      {/* <TimeDisplay/> */}
      {/* <ConditionalRendering/> */}
      {/* <ListDemo items={data.comments}/> */}
      {/* <FormDemo/> */}
      {/* <Post post={data} comments={data.comments}/> */}
      
      {/* <FancyBorder color='blue'>
        <Post post={data} comments={data.comments}/>
      </FancyBorder>
      <FancyBorder color='green'>
        <ol>
          <li>One</li>
          <li>Two</li>
          <li>Three</li>
        </ol>
      </FancyBorder> */}

      {/* <Tab headers={headers}>
        <div>
          Page 1
        </div>
        <div>
          Page 2
        </div>
        <div>
          Page 3
        </div>
      </Tab> */}

      {/* <TableDemo data={data.comments}/> */}

      {/* <ImportDemo/>
      <ComponentOne/> */}

      {/* <DomRef/> */}

      {/* <PointerEvent/> */}
      {/* <Suspense fallback={<div>loading...</div>}>
        <PointerEvent/>
      </Suspense> */}

      {/* <ErrorBoundary>
        <ErrorComponent/>
      </ErrorBoundary> */}

      {/* <DataContext.Provider value={headers}>
        <Parent/>
      </DataContext.Provider> */}

      {/* <ForwardRef/> */}

      {/* <PageWithSpinner loading={loading}/> */}

      {/* <HocDemo/> */}

      {/* <MouseTracker render={mouse=>
        <View2 mouse={mouse}/>
      }/> */}

      {/* <ThirdParty/> */}

      {/* but it is not the best option */}
      {/* <JSXElement/> */}

      {/* <Mapper data={data.comments} element={ChildElement}/> */}

      {/* <PureCounter/> */}
      {/* <ListOfWord/> */}
      {/* external root// portal root// may use in modal */}
      {/* <PortalParent/> */}

      {/* <HookCounter/> */}

      {/* <UseEffectDemo/> */}

      {/* <CleanUpDemo/> */}

      {/* <APICallDemo/> */}

      {/* <UseCallBackDemo/> */}

      {/* <UseRefDemo/> */}

      {/* <ReduxCounter/> */}

      {/* <ToDoRedux/> */}

      {/* <FormDemo/> */}
      {/* <FormikDemo/> */}

      <Router>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  {/* <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a> */}
                  <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  {/* <a className="nav-link" href="#">About</a> */}
                  <Link className="nav-link" to="/about">About</Link>
                </li>
                {/* <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">Something else here</a>
                  </div>
                </li> */}
                <li className="nav-item">
                  {/* <a className="nav-link" href="#">User</a> */}
                  <Link className="nav-link" to="/users">Users</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/movie/1">Movies</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/protected">Protected</Link>
                </li>
              </ul>
              {/* <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
              </form> */}
            </div>
          </nav>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
              <li>
                <Link to="/movie/1">Movies</Link>
              </li>
              <li>
                <Link to="/protected">Protected</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
         {/* <Switch>  */}
         {/* If you are using react-router-dom v6, it looks like Switch has been replaced with Routes */}
          <Routes>
            <Route path="/about" element={
              <AboutPage/>
            }>
            </Route>
            <Route path="/login" element={
              <LoginPage/>
            }>
            </Route>
            <Route path="/protected"  element={
              <PrivateRoute authenticate={auth() && user=="admin"}>
                <ProtectedPage/>
              </PrivateRoute>
            }>
            </Route>
            <Route path="/users/*" element={
              <UserPage/>
            }> 
            </Route>
            <Route path="/movie/:id" element={
              <MoviePage/>
            }> 
            </Route>
              <Route exact path="/" element={   //should keep in the last
                <HomePage/>
            }>
            </Route>
            <Route path="*" element={
              <PageNotFound/>
            }> 
            </Route>
            {/* </Switch> */}
          </Routes>
        </div>
      </Router>

    </div>
  );
}

export default App;

//Normal
{/* <Parent data={data}>
  <Child1 data={data}>
    <Child2 data={data}>
      
    </Child2>
  </Child1>
</Parent> */}

//createContext
{/* <Theme>
  <Child1>
    <Button data={data}>  //useContext
    </Button>
  </Child1>
</Theme> */}

//parent control child's data
{/* <Theme> => want to  use button ref
  <Child1>
    <Button ref>  
    </Button>
  </Child1>
</Theme> */}

// LoadingPage(AnyPage)
// Loading =>Show Loading icon => concern
// Page => View      => concern
// <Page>
//   LoadingIcon
// </Page>
