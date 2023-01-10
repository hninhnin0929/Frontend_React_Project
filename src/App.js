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

      <MouseTracker render={mouse=>
        <View2 mouse={mouse}/>
      }/>
      
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
