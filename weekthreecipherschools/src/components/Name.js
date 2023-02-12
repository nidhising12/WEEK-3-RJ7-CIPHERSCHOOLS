// import React, {useState } from 'react'
import React, { Component } from 'react'

class Name extends Component{

    state = {name:"Nidhi Singh"};

    // constructor(props){
    //     super(props);
    //     this.setName =this.setName.bind(this);
    // }


    setName(name){
        this.setState({...this.state, name: "akansha"});
    }

    testhandel = () =>{
        console.log("textHandler");
    }

    render(){
        return(
            <>
            <h1>The name is: {this.state.name}</h1>
            <button onClick={() => {
                this.setName("akansha"); 
                this.testhandel();
            }
        }>Click Me!</button>
            </>
        );
    }
}

// const Name = ()=>{

//     const [state, setState] =useState({name:"Nidhi"});

//     let setName = (e) => {
//         setState({ ...state,name:"akansha"});
//     };
//     return(
//         <>
//         <h1>The name is: {state.name}</h1>
//      <button onClick={setName}>Click Me!</button>
//         </>

//     );
// };

export default Name;