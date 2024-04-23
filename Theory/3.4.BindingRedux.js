//STATE CHANGE in React
//Triggers the re-rendering of DOM in React
//Involves transfer of data and long chain of props
//Requires state maangement done by redux
//Managed in React Redux using a single Store and Reducers
//Is easier in redux

//REDUX BUILDING BLOCKS
//Central store
//Actions
    //Type: String that identifies the action
    //Payload: Optional property with some Data needed to perform a task
//Reducers: Function that receives the old state and action and returns a new state, updated version of the previos state, since state=immutable
//Subscription

//DATA FLOW
//Its unidiractional (Why?)
    //Two-way binding was used to change state data but it had adverse affects on browser performance
    //Easier to manage state when actions on UI and update of state are separate
    //Enabled reuse of containers, actions and readucers in React Native
//Starts when the user performs an action in the UI
    //This invokes an Action Creator
        //The AC dispatches an action to the Root Reducer and is passed to other reducers
            //The RR Handles Action and returns new state
                //The state is updated in the Store
                    //The store updates the UI's component. 
