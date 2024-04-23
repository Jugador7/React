//Allow users to interact with web page
//Handle data using components
//Store data in component state
//Control changes and update the state of the variable using event handlers

//Form elements in HTML <input>, <textarea>, and <select>
//In HTML the form elements maintain their own state
//In React, the form elements are kept in the state property of components


//FORM VALIDATION
//Get form values
//Manage the form state
//Validate the form on the fly
//Show the error messages for every incorrect value

//TYPES OF INPUTS:
//Uncontrolled:
//Allow the browser to handle most of the form elements and collect data through React's change events.
//Manage their own value in the input's DOM node.
//Elements will be updated when input value changes. 
//Ref function is used to get the form values from DOM

//Controlled
//Use React to fully control the element by setting and updating the input value directly, requires more code.
//Create state to hold, update, display value
//Functions govern passing of data
//Better control over form elements and data
//Props take current values and  notifies changes
//A parent component controls the changes

//Example:

import React, {useState} from "react";

export default function App(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = (event) => {
        console.log(
            "Email:", email,
            "Password:", password          
        ); event.preventDefault();
    };
    return (
        <form onSubmit={handleSubmit}>
            <h1>Registration</h1>
            <label>
                Email
                <input
                    name="email"
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)} 
                    required 
                />
            </label>
            <label>
                Password
                <input
                    name="password"
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)} 
                    required 
                />
            </label>
            <button>
                Submit
            </button>
        </form>
    )
}


//REACT FORM HOOKS
//Useful package for creating web forms
//Reduces amount of code
//Uses ref to control form inputs
//Can be installed using the install command


