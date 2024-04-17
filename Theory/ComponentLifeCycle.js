1. Montjaje: Creación del componente
Se llaman cuatro métodos en este orden:
- construcor()
- getDerivedStateFromProps
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
    return{
      <div>
        The component is rendered.
      </div>
    }
  }
}

2. Actualización: Cuando el componente cambia
Se llaman cinco métodos en este orden
- getDerivedStateFromProps()
- shouldComponentUpdate() // has que este componente devuelva falso si no quieres que se reproduzcan los cambios en el estado
- render() //actualiza el componente
- getSnapshotBeforeUpdate() //guarda una foto del componente justo antes de actualizarlo
- componentDidUpdate

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
    return{
      <div>
        The component is rendered.
      </div>
    }
  }
}


3. Desmontaje: Cuando el componente es removido
