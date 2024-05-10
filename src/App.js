import './App.css';
import EventBind from './components/EventBind'
import Greet from "./components/Greet";
import Hello from "./components/Hello";
import Welcome from "./components/Welcome";
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';

function App() {
  return (
    <div className="App">
      <NameList/>
      <UserGreeting/>
      <ParentComponent/>
      <EventBind />
      <Message />
      <FunctionClick/>
      <ClassClick/>
      <Counter />
      <Greet name ='Salmon' quirks='Strength'>
        <p>This is children props</p>
      </Greet>
      {/* <Greet name ='Ahmad' quirks='Stamina'>
        <button>Fire</button>
      </Greet>
      <Greet name ='Yuji' quirks='Speed'/>
      <Welcome name ='Salmon 2' quirks='Strength'/>
      <Welcome name ='Ahmad 2' quirks='Stamina'/> */}
      <Welcome name ='Yuji 2' quirks='Speed'/>
      <Hello></Hello>
    </div>
  );
}

export default App;
