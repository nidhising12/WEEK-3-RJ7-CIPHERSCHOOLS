import React, { useState } from 'react'
import UserDetails from './UserDetails.js';
import Test from './Test.js';

// const AllUserList = () =>{
//     const[state, setState]= useState({name: "Priyanshu Saxena"});

//     let allUsers=[{
//         name:"John",
//         email:"john@email.com",
//         phoneNumber: "2732462498",
//     },
//     {
//         name:"Shreyus",
//         email:"shreyus@email.com",
//         phoneNumber: "27300000", 
//     },
//     {
//         name:"Nilanjan",
//         email:"Nilajna@email.com",
//         phoneNumber: "1111300000", 
//     },
// ];

// let setStateName= (name )=> {
//     setState({...state,name});
// }
//     return(
//         <div>
        
//         <Test name={state.name} setName={setStateName}/>
//              {allUsers.map((user, index) => (
//                  <UserDetails key={index} user={user}/>
//                     ))}
//         </div>
        
        

//     )
// };

class AllUserList extends React.Component{
state={
    name:"Nidhi Singh",
}

setStateName = (name) => {
    this.setState({ ...this.state, name});
}

componentDidMount(){
    console.log("Hello")
}

 allUsers=[{
    name:"John",
    email:"john@email.com",
    phoneNumber: "2732462498",
},
{
    name:"Shreyus",
    email:"shreyus@email.com",
    phoneNumber: "27300000", 
},
{
    name:"Nilanjan",
    email:"Nilajna@email.com",
    phoneNumber: "1111300000", 
},
];
    render(){
        setTimeout(() => {
            this.setState({name:"Abinash Singh"});
        }, 15000);
        return(
            <div>
                <h1>Th name is {this.state.name}</h1>
                {this.allUsers.map((user, index) => (
                    <UserDetails key={index} user={user}/>
                ))}
            </div>
        )
    }
}   

// const AllUserList=() => {
//     const[state, setState]= useState({name: "Priyanshu Saxena"});
//     return(
//         <h1>The name is {state.name}</h1>
//     )
// }
export default AllUserList;