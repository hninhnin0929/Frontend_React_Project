//import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import VirtualDomConcept from './components/VirtualDomConcept';
import FunctionComponent from './components/function/FunctionComponentDemo';

function App() {
  return (
    <div>
      <header>
        Hello From React
      </header>
{/*       <Hello></Hello>
      <Hello/> */}
      {/* <VirtualDomConcept></VirtualDomConcept> */}
      <FunctionComponent/>
    </div>
  );
}

export default App;
