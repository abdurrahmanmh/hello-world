import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

 class LifecycleA extends Component {
 constructor(props) {
   super(props)
 
   this.state = {
      name:'wish wash'
   }
   console.log("Lifecycle A constructor")
 }
 static getDerivedStateFromProps(props,state){
    console.log("Lifecyle A getDerivedStateFromProps")
    return null
 }

 componentDidMount(){
    console.log('Lifecycle A componentDIdMount')
 }



    render() {
        console.log('Lifecyle A render')
    return (
      <div>
        <div>LifecycleA</div>
        <LifecycleB/>
      </div>
    )
  }
}

export default LifecycleA