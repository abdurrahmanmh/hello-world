import React, {Component} from "react";

class Welcome extends Component {
    render(){
        const {name,quirks} =this.props
        // const {state1,state2} =this.state
        return <h1>Class Comp {name} quirks : {quirks}</h1>
    }
}

export default Welcome 