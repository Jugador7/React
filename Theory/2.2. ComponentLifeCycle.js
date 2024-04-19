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

class App extends React.component {
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
    
    componenDidUpdate(){
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


3. Desmontaje: Cuando el componente es removido
se llama un solo metodo
- ComponentWillUnmount()

import React from 'react';

class AppInner extends React.component {
    componentWillUnmount(){
      console.log("This component will unmount")
    }
    render(){
      return <div>Inner component</div>
    }
}

class App extends React.component {
    state = {innerComponent : <AppInner/>}
             
    componenDidMount(){
      setTimeout{()=>{
        this.setState({innerComponent:<div>unmounted</div>})
      },5000}
    }
  
    render(){
      console.log("Inside render method")
      return(
        <div>
        {this.state.innerComponent}
        </div>
      )
    }
  }

Puedes pasar datos de paderes a hijos usando propiedades, de hijos a padres usando callbacks y entre hermanos. 
