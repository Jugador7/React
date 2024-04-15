EcmaScript(ES)

Ecma es una organización que crea estándares tecnológicos de comunicación e información a nivel global en un amplio rango.

JS se adiere a las especificaciones de ES6 la más reciente es la de 2020. 

Lo nuevo de ES6 es:

- let (permite restringir el alcance de una varibale al bloque en el que ha sido declarada - alcance local)
- const (al igual que let se utiliza además de var para crear variables) (const permite declarar constantes cuyos valores no pueden cambiar).
- Arrow functions (permite decllarar funciones como si fueran variables) - También se pueden llamar y pueden pasarse como parametros para callbacks - se les pueden pasar parámetros - pueden devolver tipos de datos u objetos
const sayHello = ()=> console.log("ES6 Function - Hello World"") - setTimeout(sayHello, 1000); - const sayHello = (first, last) => console.log ("hello " + first + " " + last) - const twoParamsTwoLinesArrowFunc = (first, last) => {const greeting = "hello"; return greeting + " "
+ first + " " + last}

- Promise 
Es un objeto que representa un cumplimiento eventual de una operación asíncrona y su valor de retorno. Cuando invocas una operación asíncrona la promesa está pendiente. Cuando la operación se ejecuta exitosamente la promesa queda cumplida. Si la operacioón falla la promesa se rechaza.
let promiseArgument = ((resolve, reject) => {
setTimeout(() => {
      let currTime = new Date().getTime();
      if(currTime % 2 === 0){
        resolve("Success!")
      }else{
        reject("Failed!")
      }
    }, 2000)
  })


- Class (plantilla para crear objetos, en JS se crean basadas en prototipos)
function Person (name, age){
  this.name = name;
  this.age = age;
  return this;
}

let person1 = Person("Jason",20)
