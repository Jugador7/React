//SYNC
//Runs in sequence from top to bottom
//Each operation waits for the previous to complete

//ASYNC
//Runs in parallel
//An operation can occur while another is still being processed
//Preferable when execution can be blocked indefinitely (e.g. File system operations or Network requests)
//Page remains responsive
//JS code executes functions concurrently, does not wait for resposnes necessarily

//WHY ASYNC IN REDUX?
//The flow of Redux's state management tasks is completely synchronous
    //How can you enable async actions
    //How do you enable state transactions
    //How do you intengrate your application state with the data generated by an asynchrnous action?

    //Introducing Middleware
        //In Redux, Actions and Reducers complement your app's architecture
        //To use asynchronous operations, Actions and Reducers are not enough we need a MiddleWare
        //Middleware techniques
            //Thunk
                //Allows to pass functions within action creations to creat async Redux
                //Allows writing action creators
                //Allows dispatch delay of action
                //Allows dispatching of an action
                //Passes dispatch() and getState() as parameters to the function
                //Action Creator is called a Thunk
                    //Advantages
                        //Suitable for simple apps
                        //Enables async ops without a lot of boiler plate code
                        //Easy to setup and implement - less learning curve
                    //Disadvantages
                        //Cannot act in response to an action
                        //Difficult to handle concurrency problems that may occur
                        //Imperative - Not very easy to test
                        //Does not scale well
            //Saga
                //Uses generators to enable async ops
                //Exposes a set of helper functions to create declarative JS objects
                //Handles the objects yielded in the backend
                    //Pros
                        //Allows expressing complex logic as pure functions
                        //Easy to test because of predictability, allows separation of concerns
                        //Sagas can be time-traveled
                        //Makes easier to scale complex apps
                        //Easier to catch errors and handle failures
                        //Wel documented
                    //Cons
                        //Not very suitable for simple apps
                        //More boilerplate code than other middlewares
                        //Need knowledge of generators
                        //High learning curve
            //Promise-based
            //Async/Awaite 
        //Why Thunk?
            //You can communicate with your apps before they reach your reducer
            //You can use many use cases around practical web apps
            //Understanding Thunk is easier for those learning Redux the first time

