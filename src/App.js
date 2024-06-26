import "./App.css";
import EventBind from "./components/EventBind";
import Greet from "./components/Greet";
import Hello from "./components/Hello";
import Welcome from "./components/Welcome";
import Message from "./components/Message";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";
import NameList from "./components/NameList";
import Stylesheet from "./components/Stylesheet";
import Inline from "./components/Inline";
import "./appStyles.css";
import styles from "./appStyles.module.css";
import Form from "./components/Form";
import LifecycleA from "./components/LifecycleA";
import FragmentDemo from "./components/FragmentDemo";
import Table from "./components/Table";
import PureComp from "./components/PureComp";
import ParentComp from "./components/ParentComp";
import RefsDemo from "./components/RefsDemo";
import FocusInput from "./components/FocusInput";
import FRParentInput from "./components/FRParentInput";
import PortalDemo from "./components/PortalDemo";
import Hero from "./components/Hero";
import ErrorBoundary from "./components/ErrorBoundary";
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";
import ClickCounterTwo from "./components/ClickCounterTwo";
import HoverCounterTwo from "./components/HoverCounterTwo";
import User from "./components/User";
import Counter2 from "./components/Counter2";
import ComponentC from "./components/ComponentC";
import { UserProvider } from "./components/userContext";

function App() {
  return (
    <div className="App">
      <UserProvider value="Wish Wash">
        <ComponentC />
      </UserProvider>
      {/* <UserProvider value='Wish Wash'> */}
      <ComponentC />
      {/* </UserProvider> */}
      <Counter2
        render={(count, incrementCount) => (
          <ClickCounterTwo
            count={count}
            incrementCount={incrementCount}
          ></ClickCounterTwo>
        )}
      />
      <Counter2
        render={(count, incrementCount) => (
          <HoverCounterTwo
            count={count}
            incrementCount={incrementCount}
          ></HoverCounterTwo>
        )}
      />

      {/* prop render value function */}
      {/* <User render = {(isLoggedIn)=>isLoggedIn ?'wish wash':"Guest"}></User>
      <ClickCounterTwo/>
      <HoverCounterTwo></HoverCounterTwo> */}

      <HoverCounter />
      <ClickCounter name="March" />

      {/* <ErrorBoundary>
      <Hero heroName="Balls" />
        <Hero heroName="Joker" />
      </ErrorBoundary> */}

      <PortalDemo></PortalDemo>
      <FRParentInput />

      {/* <FocusInput/> */}
      {/* <RefsDemo/> */}

      <ParentComp />
      <Table />
      <FragmentDemo />
      <LifecycleA />

      <Form />

      <h1 className="error">Error</h1>
      <h1 className={styles.success}>success</h1>
      <Inline />
      <Stylesheet primary={true} />
      <NameList />
      <UserGreeting />
      <ParentComponent />
      <EventBind />
      <Message />
      <FunctionClick />
      <ClassClick />
      <Counter />
      <Greet name="Salmon" quirks="Strength">
        <p>This is children props</p>
      </Greet>
      {/* <Greet name ='Ahmad' quirks='Stamina'>
        <button>Fire</button>
      </Greet>
      <Greet name ='Yuji' quirks='Speed'/>
      <Welcome name ='Salmon 2' quirks='Strength'/>
      <Welcome name ='Ahmad 2' quirks='Stamina'/> */}
      <Welcome name="Yuji 2" quirks="Speed" />
      <Hello></Hello>
    </div>
  );
}

export default App;
