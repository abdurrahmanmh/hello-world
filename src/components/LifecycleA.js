import React, { Component } from "react";
import LifecycleB from "./LifecycleB";

class LifecycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "wish wash",
    };
    console.log("Lifecycle A constructor");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("Lifecyle A getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("Lifecycle A componentDIdMount");
  }

  shouldComponentUpdate() {
    console.log("LifecycleA shoudl Component Update");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifecycleA get getSnapshotBefore Update");
    return null;
  }

  componentDidUpdate() {
    console.log("Lifecycle componentDidUpdate");
  }

  chageState = () => {
    this.setState({
      name: "codevolution",
    });
  };

  render() {
    console.log("Lifecyle A render");
    return (
      <div>
        <div>LifecycleA</div>
        <button onClick={this.chageState}>Change State</button>
        <LifecycleB />
      </div>
    );
  }
}

export default LifecycleA;
