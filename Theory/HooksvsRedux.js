Feature	Hooks	Redux
//HOOKS
//Description	Method for handling state and lifecycle in React components without using class components.	
/Added to React	Version 16.8
//Goal	Simplify components by transferring logic between them.
//Usage	Handles local component state.
//Developer experience	Focused on making components less complex.
//When to use	
  //Single-view app without asynchronous I/O.
  //If your component:
  //Doesn't use the network.
  //Doesn't save or load state.
  //Doesn't share state with other non-child components.
  //Does need some ephemeral local component state.

//REDUX
//A predictable state container for JavaScript applications.
//Added to React	Independent library for managing global application state.
//Goal	Provide a consistent and predictable state management solution.
//Usage		Manages global application state.
//Developer experience	Offers a great developer experience, including live code editing and a time-traveling debugger.
//When to use	 
  //If your component:
  //Uses I/O like network or device APIs.
  //Saves or loads state.
  //Shares its state with non-child components.
  //Deals with any business logic or data processing shared with other parts of the application.

//EXAMPLE OF HOOKS
class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: “John”,
      last_name: “Smith”,
      department: “operations”
    };
  }
  updateUserDepartment = () = >{
    this.setState({
      department: “IT”
    });
  }
  render() {
    return { < div > <p > First Name: {
        user.first_name
      } < /p> <p> User Department: {user.department} </p > <button type = ”button”onClick = {
        this.updateUserDepartment
      } > Change Department to IT < /button> </div >
    };
  }
}
ReactDOM.render( < User / >, document.getElementById(‘userDisplay’));


//EXAMPLE OF REDUX:
import React, { useReducer } from 'react';
import ReactDOM from 'react-dom';
const initialState = {
  first_name: "John",
  last_name: "Smith",
  department: "operations"
};
function myReducer(state, action) {
  switch (action.type) {
    case 'changeDepartmentToIT':
      return {
        ...state,
        department: 'IT'
      };
    case 'changeDepartmentToSecurity':
      return {
        ...state,
        department: 'Security'
      };
    default:
      throw new Error();
  }
}
function ChangeUserDepartment() {
  const [state, dispatch] = useReducer(myReducer, initialState);
  
  return (
    <div>
      <p>First Name: {state.first_name}</p>
      <p>Last Name: {state.last_name}</p>
      <p>User Department: {state.department}</p>
      <button onClick={() => dispatch({type: 'changeDepartmentToIT'})}>Change User Department to IT</button>
      <button onClick={() => dispatch({type: 'changeDepartmentToSecurity'})}>Change User Department to Security</button>
    </div>
  );
}


