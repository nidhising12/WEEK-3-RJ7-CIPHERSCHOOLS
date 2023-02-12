import React, {useState} from 'react'
import SumNumbers from './SumNumbers';
import { Link, Outlet } from 'react-router-dom';

const SignUpFormm = () => {
    const [state, setState] =useState({
        firstName: "",
        lastName: "",
        email:"",
        password:""
    });

    const [error,setError] =useState("");

    let halndleChange = (e) =>
        setState({ ...state, [e.target.name]: e.target.value});
    
    return(
        <>
            <form onSubmit={(e) => {e.preventDefault();

            // if(isValidUser({firstName: state.firstName, lastName :state.lastName, email: state.email, password: state.password})){
            //     console.log("User is valid");
            // }else{
            //     setError("The User is invalid");
            //     console.log("User is invalid");
            // }

            }}>
            <label>First Name</label>
            <input name={"firstName"} type={"text"} onChange={halndleChange} value= {state.firstName} placeholder={"First Name"} />

            <label>Last Name</label>
            <input name={"lastName"} type={"text"} onChange={halndleChange} value= {state.lastName} placeholder={"Last Name"} />

            <label>First Name</label>
            <input name={"email"} type={"email"} onChange={halndleChange} value= {state.email} placeholder={"Email"} />
            <label>First Name</label>
            <input name={"password"} type={"password"} onChange={halndleChange} value= {state.password} placeholder={"password"} />
            <button type={"submit"}>Submit</button>
            <span style={"color:red"}>{error}</span>
            <Link to={"sum"}>Sum Component</Link>
            <Outlet/>
            </form>
        </>
    )
}

export default SignUpFormm;