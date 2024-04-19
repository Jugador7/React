0. Inicialización



1. Montjaje: Creación del componente
Constructor, render, React actualiza el DOM y refs, ComponentDidMount
Se llaman cuatro métodos en este orden:
- construcor()
- getDerivedStateFromProps()
- render()
- componentDidMount()

import React from 'react';

class App extends React.component {
  constructor(props){
  super(props)
  console.log("Inside the constructor")
  }
  componenDidMount = ()=>{
    console.log("Inside component did mount")
  }

  render(){
    console.log("Inside render method")
    return {
      <div>
        The component is rendered.
      </div>
    }
  }
 }


2. Actualización: Cuando el componente cambia
New props, setState, forceUpdate(), render, React actualiza DOM y referencias, componentDidUpdate
Se llaman cinco métodos en este orden
- getDerivedStateFromProps()
- shouldComponentUpdate() // has que este componente devuelva falso si no quieres que se reproduzcan los cambios en el estado
- render() //actualiza el componente
- getSnapshotBeforeUpdate() //guarda una foto del componente justo antes de actualizarlo
- componentDidUpdate()

import React from 'react';

class App extends React.Component {
    state = {counter : "0"};
    incrementCounter = ()=> this.setState({counter:parseInt(this.state.counter)+1});
  
    shouldComponentUpdate(){
      console.log("Inside shouldComponentUpdate")
      return true;
    }
  
    getSnapshotBeforeUpdate(prevProps, prevState){
      console.log("Inside getSnapshotBeforeUpdate");
      console.log("Prev counter is " + prevState.counter);
      console.log("New counter is " + this.state.counter);
      return prevState;
    }
    
    componentDidUpdate(){
      console.log("Inside component DidUpdate")
    }
  
    render(){
      console.log("Inside render method")
      return(
        <div>
          <button onClick={this.incrementCounter}>
          Click Me!
          </button>
          {this.state.counter}    
        </div>
      )
    }
  }

  export default App;


3. Desmontaje: Cuando el componente es removido
se llama un solo metodo
- ComponentWillUnmount()
import React from 'react';

class AppInner extends React.Component {
  componentWillUnmount() {
    console.log("This component will unmount")
  }

  render() {
    return <div>Inner component</div>
  }
}

class App extends React.Component {
  state = {
    innerComponent: <AppInner />,
    timerFinished: false // Add a flag to track whether the timer has finished
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        innerComponent: <div>Unmounted</div>,
        timerFinished: true // Set the flag to true when the timer finishes
      });
    }, 5000);
  }

  render() {
    console.log("Inside render method")
    return (
      <div>
        {this.state.innerComponent}
        {this.state.timerFinished && <h1>Timer Finished!</h1>} {/* Render h1 header if timerFinished is true */}
      </div>
    )
  }
}

export default App;

Puedes pasar datos de paderes a hijos usando propiedades, de hijos a padres usando callbacks y entre hermanos. 
