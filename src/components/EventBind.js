import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:"hello"
      }

      //best practice
    //   this.clickHandler=this.clickHandler.bind(this)
    }

    // clickHandler(){
    //     this.setState({
    //         message:"babai"
    //     })
    //     console.log(this)
    // }
    clickHandler =()=>{
        this.setState({
            message:'Byebye'
        })
    }

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.clickHandler.bind(this)}>EventBind</button> */}
        {/* <button onClick={()=> this.clickHandler()}>EventBind</button> */}
        <button onClick={this.clickHandler}>EventBind</button>

        </div>
    )
  }
}

export default EventBind