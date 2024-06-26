- Nos ayudan a cambiar datos en una aplicación. 
- Son objetos que especifican diferentes tipos de datos
- Un objeto de estado almacena valores que pertenecen al componente. 
- Los cambios en los estados resultan en volver a reproducir el componente. 
- Es el corazón de cada componente.

Hay dos tipos de estados en react

Shared State:
- Compartido por múltiples componentes como una aplicación de ordenes. 

Local State:
- Presente solo en cierto componente que lo necesita como mostrar y ocultar información

Es necesario el estado si se necesita que el componente cambie durante la interacción del usuario. 

El estado registra el cambio del componente.

class TestComponent extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      id: 1,
      name: "John",
      age: 28
  };
  render(){
    return(
      <div>
        <p>{this.state.name}</p>
        <p>{this.state.age}</p>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<TextComponent />)

Props

Se usan para pasar datos entre componentes de React. 
Solo se pueden leer.
Son objetos que guardan los atributos de un tag y funcionan como HTML. 
Se pueden pasar argumentos de funciones al componente
Inmutables
No deberían cambiarse en un componente hijo. 
Le permiten a componentes hijos acceder a métodos definidos en el componente padre. 

class TestComponent extends React.component{
  render(){
    return <div>Hi {this.props.name}</div>
  }
//pasamos propiedades al componente
<TestComponent name= "John"/>
}

Diferencias:

States:
- Sólo pueden usarse en componentes nativos de clase. En los componentes de función se puede usar el hook useState para incluir funcionalidades stateful. 
- No puede ser accedido o modificado desde afuera del objeto. 
- Los componentes pueden crear y manejar sus propios datos con state. 
- Se usan para manejar datos
- Los datos se pueden modificiar por su propio componente pero es privado. 
- Pueden modificar el estado con el método setState()

Props:
- Pueden reusar el componente al darle la habilidad de recibir datos como input desde el componente padre. 
- Da la habilidad de recibir datos del componente padre en forma de props. 
- Los componentes reciben datos desde afuera con el prop
- Es usado para pasar datos
- Los datos solo se pueden leer y no pueden ser modificados por el componente que la recibe desde afuera. 
- Los props solo pueden pasarse desde el componente padre al hijo (flujo unidireccional)





