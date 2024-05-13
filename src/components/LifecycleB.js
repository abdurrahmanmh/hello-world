import React, { Component } from 'react'

 class LifecycleB extends Component {
 constructor(props) {
   super(props)
 
   this.state = {
      name:'wish wash'
   }
   console.log("Lifecycle B constructor")
 }
 static getDerivedStateFromProps(props,state){
    console.log("Lifecycle B getDerivedStateFromProps")
    return null
 }

 componentDidMount(){
    console.log('Lifecycle B componentDIdMount')
 }



    render() {
        console.log('Lifecyle A render')
    return (
      <div>
        LifecycleB
      </div>
    )
  }
}

export default LifecycleB