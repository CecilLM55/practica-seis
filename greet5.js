
// no es accesible desde otro modulo, pues solo se exporta la funcion greet.
let greeting =  'Hello from greet 5';

let greet = () => {
    console.log(greeting);
}
let jump = () => {
    console.log('I am jumping');
}
let run = () => {
    console.log('I am running');
}

// se exporta la funcionalidad mediante un objeto.
// si la llave y el valor tienen el mismo nombre, se puede omitir uno de ellos.
// es decir, en lugar de poner 'greet: greet' puede quedar simplemente 'greet'.
module.exports = {
    greet,
    run,
    jump
}