Core building blocks of React
-A component is a part of every application you develop in React
-Hacen más sencilla la tarea de crear la intefaz del usuario
-Las piezas de la UI se pueden partir y mergear en un componente padre para formar la UI final. 
-Cada componente se puede usar y manejar independientemente. 
-La función principal de cada componente es reproducir la interfaz del usuario y actualizarla cada vez que su estado interno sea modificado. 
-Gestiona los eventos que le pertenecen a la interfaz del usuario. 
-El ESTADO es un objeto para describir el comportamiento del componente. El compoennte puede ser "stateful" o "stateless". 
-Un componente statefull se actualiza según el estado actual, es de tipo clase. 
-Los componentes stateless son de tipo función. 
-Tienen propiedades que permiten recibir datos. 
-Tienen eventos que le permiten al componente manejar eventos DOM y de interacción con el usuario. 
-Los estados le permiten al componente mantenerse stateful. 

En React los componentes son:
- Funcionales (utiles cuando el componente tiene propiedades pero el ciclo de vida no debe ser gestionado)
  Se crean creando funciones de JS. Reciben propiedades y devuleven JSX. No tienen estados o metodos de ciclo de vida pero se les pueden añadir implementando React Hooks. Se usan para mostrar información que es fácil de
  leer, debuggear y probar. 
  Es stateless, es una función plana de JS

  const Democomponent = () => {return <h1> Welcome Message! </h1>;}

  Las propiedades son definidas por el usuario y se pasan como parametros en la función

import React from 'react';
import ReactDOM from 'react-dom';

const Democomponent = () => {
  return <h1> Welcome Message! </h1>;
}

function App(props) {
  const compStyle = {
    color: props.color,
    fontSize: props.size + "px"
  };

  return (
    <div>
      <span style={compStyle}> I am sentence </span>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App color="blue" size="25" />
  </React.StrictMode>,
  document.getElementById('root')
);

export default App;

EventHandler
  - El más común esa el on Click
  
  
- Clase
  Se puede pasar datos de una clase a otra
  Se pueden crear usando clases de JSES6
  Se usan con más frecuencia que otros componentes porque tienen más funciones.
  Pueden usar funciones de React como state, props y métodos de ciclo de vida. 
  Son stateful

  class Dem
    ocomponent extends React.Component {
    render(){
     return <h1> Welcome Message!</h1> 
    }
  }

  Heredan de React.Component y necesitan hacer override el método render. 
  Pueden tener estados y propiedades

  import React from 'react';
  class App extends React.Component {
    constructor(props){
      super(props)
    }

    render(){
     return <button onClick = {this.props.clickEvent}> Click Me!</button> 
    }
  }

  export default App;
  
- Puros compoenentes de React
  Más simples y rápidos. Usados para proveer optimizaciones. 
  No dependen ni modifican el estado de variables fuera de su alcance. 
  Pueden reemplazar componentes funcionales simples.

- Alto orden
  Técnica avanzada en React para reusar la lógica de un componente. 
  No disponible en la API de React
  Es un patrón que emergió de la naturaleza compositional de React. 
  Funciones que devuelven uno o varios componentes. 

  import React from 'react';
  
  import {Text} from 'react-native';

  const HelloWorld = () => {
    return (<Text> Hello, World!</Text>);
  }

  export default HelloWorld;


