import React, { Component,PureComponent } from "react";
import RegComp from "./RegComp";
import PureComp from "./PureComp";

class ParentComp extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      name: "wish wash",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "wish wash",
      });
    }, 2000);
  }
  render() {
    console.log("********** Parent Comp Render **********")
    return <div>Parent Component 
        <RegComp name={this.state.name}></RegComp>
        <PureComp name={this.state.name}></PureComp>
    </div>;
  }
}

export default ParentComp;
