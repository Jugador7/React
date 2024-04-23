// Redux is a state management library
// Follows a pattern known as Flux arquitecture
// Handles state changes
// Used when high number of componentes
//Not specific to react and can be used in Vanilla and Angular

//WHY REDUX?
//Management of large application with large number of states
//Redux offers a centralized state management system
//Redux reduces complexity
//Redux makes easier to maintain the state
//Enhances performances
//Effortless debugging

//ADVANTAGES
//Enhances state predictor factror
//Helps meintenance, testing, and debugging
//Optimizes performance
//Server-side rendering
//Enables sharing of data between components without providing any state or method
//Enables managing application state in a single place
//Enables acess to same application state to multiple components

//USES
//Manages state in SPA(single web apps), desktop apps via electon, React native apps. 
//Helps in caching page state
//Manages state in components/global components
//Refactors componentes
//Shares state with multiple container components

//BASIC PRINCIPLES OF REDUX
//Centralized state management system- a single store
//Component's properties are immutable
//Action-Updates->State-Rerenders->Component-Updates->Component Properties-Display->Result

//REDUX CONCEPT
//Actions - What your app can do
//Store - Location and authority of the app`s states
//Reducers - Actions that return the new state. 

//ACTIONS:
//Events fired by selecting a radio button, selecting a checkbox or clicking a button
//JSON objects that contain information about changes that need to be made to the state
//Produced by functions called action creators
//Contains type of action, time of ocurrence, and which state it aims to change
//Behavior of actions: Actions are:
    //Dispatched by various parts of your application and received by the store
    //They are JS objects that described what happend
    //Sent to your store to update the application state
    //Described by the type field that is a constant

//STORE:
//Contains the redux application state
//Can dispatch and receive actions
//It is an object not a class that contains state, functions and other objects
//Provides suscriptions to Store updates
//Holds the entire application list in the form of a state tree. 


//REDUCERS
//Receive the Action from the Store
//Makes appropriate changes to the state
//A pure function that receives the current state and an Action
//Acts as an event listener, reads the action payloads, and updates Store
//Takes two parameters, previous app state and action, returns a new app state