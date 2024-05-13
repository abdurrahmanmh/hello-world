import React, { Component } from "react";

class LifecycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "wish wash",
    };
    console.log("Lifecycle B constructor");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("Lifecycle B getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("Lifecycle B componentDIdMount");
  }

  shouldComponentUpdate() {
    console.log("LifecycleB shoudld Component Update");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifecycleBget getSnapshotBefore Update");
    return null
  }

  componentDidUpdate() {
    console.log("Lifecycle componentDidUpdate");
  }

  render() {
    console.log("Lifecyle B render");
    return <div>LifecycleB</div>;
  }
}

export default LifecycleB;
