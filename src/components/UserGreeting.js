import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }
  render() {

return this.state.isLoggedIn && <div>Welcome cheese watch</div>

    // return this.state.isLoggedIn ? (
    //   <div>Welcome my wash</div>
    // ) : (
    //   <div>Welcome gaseous</div>
    // );

    // let message;
    // if (this.state.isLoggedIn) {
    //   message = <div>Welcome mouth wash</div>;
    // } else {
    //   message = <div>Welcome gas</div>;
    // }

    // return <div>{message}</div>;

    // if (this.state.isLoggedIn) {
    //   return <div>Welcome Wish Wash</div>;
    // } else {
    //   return <div>Welcome Guest</div>;
    // }

    // return (
    //   <div>
    //     <div>Welcome Wish Wash</div>
    //     <div>Welcome Guest</div>
    //   </div>
    // );
  }
}

export default UserGreeting;
