import React, { Component } from "react";
//import UpdatedComponent from './withCounter'
import withCounter from "./withCounter";

 class ClickCounter extends Component {
    // constructor(props) {
    //   super(props)
    
    //   this.state = {
    //      count:0
    //   }
    // }
    // incrementCount=()=>{
    //     this.setState(prevState=> {
    //         return {count:prevState.count +1}
    //     })
    // }

  render() {
    console.log(this.props.name)
    //const {count}=this.state
    const {count,incrementCount}=this.props
    return (
      <div>
        {/* <button onClick={this.incrementCount}>{this.props.name} Clicked {count} times</button> */}
        <button onClick={incrementCount}>{this.props.name} Clicked {count} times</button>
      
      </div>
    );
  }
}

export default withCounter(ClickCounter, 5);
