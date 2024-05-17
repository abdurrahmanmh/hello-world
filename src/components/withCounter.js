import React from "react";
import PropTypes from "prop-types";

const withCounter = (WrappedComponent, incrementNumber) => {
  class WithCounter extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }
    incrementCount = () => {
      this.setState((prevState) => {
        return { count: prevState.count + incrementNumber };
      });
    };

    render() {
        console.log(this.props.name)
      return (
        <WrappedComponent
          //name="wish wash"
          count={this.state.count}
          incrementCount={this.incrementCount}
          //pass other props
          {... this.props}
        />
      );
    }
  }
  return WithCounter;
};

export default withCounter;

// export default (WrappedComponent) => {
//   const hocComponent = ({ ...props }) => <WrappedComponent {...props} />

//   hocComponent.propTypes = {}

//   return hocComponent
// }
