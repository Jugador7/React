Qué es JSX?
- Extensión de sintáxis de JS o XML  de JS.
- Es una manera más fácil de crear componentes en React. 
- Produce elementos de React. 

La sintáxis es de XML (parecida a HTML) para extender el ECMAScript. 
Permite que el texto XML o el similar al HTML coexista con el código de React o JS. Se usa por preporcesadores o compiladores para transformar el HTML en objetos de JS. 

Ejemplo de JSX:
const el1 = <h1> Este es un snippet de ejemplo de JSX </h1>

Los navegadores no entienden JSX así que hay que usar Babel para compilar.

Beneficios:
- Más fácil de entender para personas no técnicas. 
- Evitas aprender un lenguaje de plantillas. 
- Los errores en el código se detectan fácilmente. 
- Promueve la idea de estilos en-línea. 
- Permite mantener tu código limpio y elegante. 
- Es más rápido que el JS normal 
- Sanitiza los errores de output para prevenir ataques como crossite scripting. 

Ejemplo de React:

import React from 'react'

function App(){
  return (
    <div>
      <p><This is a simple list></p>
      <ul>
        <li>List item no.1 </li>
        <li>List item no.2 </li>
      </ul>
    </div>
  );
}

JSX combina la belleza de html y el poder de JS. 
