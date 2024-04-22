// Introduced in February 2019 as apart of React 16.8
// Help you make your code clearer and better structuredClone
// Are regular JavasScript functions
// Provide a way to use functionalities such as context or state
// Used without classes
// Use function components


// WHY HOOKS?
// Class componentes pose problems such as wrapper complexity, unmanageable size of components and confusing classes.
// Hooks enable function componentes to have access to state and other React features. 
// Hooks help you create simpler code without classes. 
// You can create your own custom hook

// ADVANTAGES:
// Readability
// Overall Optimized Content
// Lesser code
// Writing a functional component with state
// Writing complex components became easier
// Handling events and logic in functional components
// Performance boost with functional components

// BEST PRACTICES:
// Can be called only from inside React function components
// Can only be called at the top level of a component
// Cannot be conditional
// Use Node version  or above
// Use NPM version 5.2 or above
// Use Create-react-app tool for running the react app

// STANDARD HOOKS
//useState: Adds state to a function component
//useEffect: Manages side effects
//useContext: Manages Context changes
//useReducer: Manages Redux State changes

//CUSTOM HOOKS
//Named with prefix 'use'
//Allow you to add a special unique functionality to your application
//Is a composition of one or multiple Hooks
//Are reusable, can be broken into smaller Hooks, testable. 

//Example:
import React, {useState} from 'react';

function CntApp(){
    //Declare a new variable called "count"
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>You clicked {count} many times</p>
            <button onClick={()=> setCount(count+1)}>
                Click Me
            </button>
        </div>
    );
}

export default CntApp;

