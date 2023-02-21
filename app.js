// inyección de modulo o función de este.
let greet = require('./greet1');
// se le extiende la funcion en especifico que se desea pasar.
// let greet2 = require('./greet2').greet;
let greet2a = require('./greet2');

// manda a llamar una función del modulo greet1.js
greet();
// greet2();

// cuando se inyecta el modulo se puede acceder a la propiedad del modulo de esta manera.
greet2a.greet();




const greet3 = require ('./greet3');
console.log(greet3);
greet3.greet();

// cambio el valor de la variable del modulo desde la aplicacion.
greet3.greeting = 'Hello from the App';

// require es una referencia en memoria, no en valor. si modifico algo desde otro modulo con el require se modificara en el modulo
// base, a pesar de que cree otra variable inyectando dicho modulo.
let greet3b = require('./greet3');
greet3b.greet();


// se puede acceder a los componentes de la clase mediante los puntos.
const Greet4 = require('./greet4');

// como se crea un neuvo constructor ya desde otro modulo entonces es una referencia en memoria y valor completamente distinta,
// aunque se cree otra referencia con el origen en el mismo modulo.
let myGreet = new Greet4;
myGreet.greet();
// una constante no cambia su valor a diferencia de un let, donde si se puede cambiar el valor a la variable.

//
const greet5 = require('./greet5');
greet5.greet();
greet5.jump();
greet5.run();