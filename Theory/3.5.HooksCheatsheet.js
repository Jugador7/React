
//Hooks	Functions called hooks enable "hooking into" features of the React state and lifecycle from function components.	

importReact,{useState}from 'react';
function CntApp() { 
const[count,setCount]=useState(0);
return(Youclicked{count}many times
<buttononClick={()=>setCount(count+1)}>Clickme</button>
);}
export default CntApp;

//React Forms	React makes use of forms to enable user interaction with the website.	

import React, {Component} from "react";
export default functionApp() {
const [email, setEmail] = React.useState("");
const [password, setPassword] = React.useState("");
const handleSubmit = (event) => {
console.log(`Email: ${email}Password: ${password}`);
event.preventDefault();
}
return ( < formonSubmit = {
handleSubmit
} > 
< h1 > Registration < /h1>
<label> Email:< input name="email" type="email" value={email}
onChange={e => setEmail(e.target.value)} required/ > < /label>
<label>Password:<input name="password" type="password" value={password}
onChange={e => setPassword(e.target.value)}required/></label>
<button>Submit</button>
</form>);

//Redux	Redux is a state management library that is often used with React to handle the state of your application. 
  //An application state is like a global object which holds information that you use for various purposes later in the app.	
1
  $ npm install redux react-redux --save 
