import React, {useState} from 'react'

const UserDetails =({user ={}}) => {
    const [h1Text,setH1Text] = useState("This is Demo Component");
    return(
        <div>
            <h1>{user.name}</h1>
            <h5>Email: {user.email}
            <br/>
            Phone Number: {user.phoneNumber}
            </h5>
            <h1>{h1Text}</h1>
            <button onClick={(e) => (
                setH1Text("This is Cipher School")
            )}>Click Me!</button>
        </div>
    );
};

// class UserDetails extends Component{
//     user = this.props.user;
//     render(){
//         return(
//             <div>
// //             <h1>{user.name}</h1>
// //             <h5>Email: {user.email}
// //             <br/>
// //             Phone Number: {user.phoneNumber}
// //             </h5>
// //         </div>
//         )
//     }
// }

export default UserDetails;