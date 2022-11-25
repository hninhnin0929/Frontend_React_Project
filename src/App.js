//import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import VirtualDomConcept from './components/VirtualDomConcept';
import FunctionComponent from './components/function/FunctionComponentDemo';
import ClassComp from './components/classcomponent/ClassComp';
import Post from './components/function/Post';

function App() {
  
  let data = {
    "title": "This is first post",
    "body": "This is first post description",
    comments: ["This is first comment ", "This is second comment "]
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
      <Post post={data}/>
    </div>
  );
}

export default App;
