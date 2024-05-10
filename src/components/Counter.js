import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }

    increment(){
        //this.state.count=this.state.count + 1

        // this.setState({
        //     count:this.state.count+1 
        // },()=>{
        //     console.log('Callback Value ', this.state.count)
        // })
        // console.log(this.state.count)

        //make it 5 times working
        this.setState((prevState,)=>({
            count:prevState.count+1
        }))
        console.log(this.state.count)

    }

    incrementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        //not work because react optimization
    }

  render() {
    return (
      <div>
        <div>
        Counter- {this.state.count}
      </div>
      <button onClick={()=>this.incrementFive()}>Increment</button>
       </div>
    )
  }
}

export default Counter