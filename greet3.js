// expone un objeto construido, el modulo debe tener una clase constructora y 
// contar con un constructor para regresar la instancia de un objeto.
// si se inica con mayuscula es un constructor.

function Greetr() {
    this.greeting = 'Hello from the function constructor';
    this.greet = function () {
        console.log(this.greeting);
    }
}

//  Regresa la instancia de un objeto se usa un new, asi es como la exporta. 
module.exports = new Greetr;
