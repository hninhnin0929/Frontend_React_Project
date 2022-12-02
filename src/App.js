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


function App() {
  
  let data = {
    "title": "This is first post",
    "body": "This is first post description",
    comments: [
                {id:1, text: "This is first comment "}, 
                {id:2, text: "This is second comment "}
              ]
  }
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
      <ListDemo items={data.comments}/>
    </div>
  );
}

export default App;
