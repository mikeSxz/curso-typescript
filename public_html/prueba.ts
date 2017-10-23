function holaMundo(nombre) {
    return "hola " + nombre;
}

let nombre = "Miguel Suarez";
var etiqueta = <HTMLElement>document.getElementById("container");
etiqueta.innerHTML= holaMundo(nombre);

alert('Hola mundo');