//React state	The state object is where you keep the component's property values.	

class TestComponent extends React.Component{

constructor(props) {
 super(props);
 this.state= {
   id: 1,
   name: “John”,
   age: 28
 };
}

render() {
  return (
    <div>
      <p>ID: {this.state.id}</p>
      <p>Name: {this.state.name}</p>
      <p>Age: {this.state.age}</p>
    </div>
  );
}

//Props	Props is short for properties and it is used to pass data between React components.	
class TestComponentextendsReact.component{
render() {
return
Hi {this.props.name}}
//passing the props as examples to the test component
TestComponentname=‘John’
TestComponentname=‘Jill’

//mounting	When a component instance is created and added to the DOM, these methods are invoked in the following order:
constructor(),getDerivedStateFromProps(),
render(),componentDidMount().	
class Header extends React.Component {
constructor(props) {
super(props);
console.log("Inside the constructor")
}
componentDidMount =()=> {
console.log("Inside component did mount")
}
render() {
console.log("Inside render method")
return (
The component is rendered
)
}
}
export default App

//updating	When a component is updated,five methods are called in the same order: getDerivedStateFromProps(),shouldComponentUpdate(),render(),
getSnapshotBeforeUpdate(),componentDidUpdate()	
 class App extends React.Component{
state = {counter: "0"};
incrementCounter = () => this.setState({counter:parseInt(this.state.counter)+1})
shouldComponentUpdate(){
 console.log("Inside shouldComponent update")
  return true;
}
getSnapshotBeforeUpdate(prevProps,prevState){
console.log("Inside getSnapshotBeforeUpdate")
console.log("Prev counter is" +prevState.counter);
console.log("New counter is" +this.state.counter);
return prevState
}
componentDidUpdate(){
  console.log("Inside componentDidUpdate")
}
render(){
  console.log("Inside render")
  return(<button onClick={this.incrementCounter}>Click Me!</button>{this.state.counter}
)
}}
export default App;

  
//Unmounting	When a component is removed or unmounted from the DOM, the componentWillUnmount() method enables us to run React code.	
 import React from 'react';
class ComponentOne extends React.Component {
componentWillUnmount() {
console.log('The component is going to be unmounted');
}
render() {
return Inner component;
}
}
class App extends React.Component {
state = { innerComponent:<AppInner/>};
componentDidMount() {
setTimerout(()=>{
this.setState({ innerComponent:unmounted});
},5000)
}
render() {
console.log("Inside render")
return (
{this.state.innerComponent});
}
}
export default App;
