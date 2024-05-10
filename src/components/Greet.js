import React, { Children } from "react";

// function Greet() {
//     return <h1>Hello world</h1>
// }

// export const Greet= (props) =>{
//     console.log(props)
//     //props.name = 'man'
//     return (
//         <div>
//             <h1>Hello World 2 {props.name} with {props.quirks}</h1>
//             {props.children}
//         </div>
//     )
// }

// export const Greet= ({name, quirks,children}) =>{
//     console.log(name, quirks)
//     //props.name = 'man'
//     return (
//         <div>
//             <h1>Hello World 2 {name} with {quirks}</h1>
//             {children}
//         </div>
//     )
// }

export const Greet= props =>{
    const {name,quirks,children}=props
    return (
        <div>
            <h1>Hello World 2 {name} with {quirks}</h1>
            {children}
        </div>
    )
}

export default Greet