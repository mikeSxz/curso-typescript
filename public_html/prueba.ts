function holaMundo(nombre) {
    return "hola " + nombre;
}

let nombre = "Miguel Suarez";
var etiqueta = <HTMLElement>document.getElementById("container");
etiqueta.innerHTML= holaMundo(nombre);

var tsname:string = "Miguel Angel";
var edad:number = 25;
var programador:boolean = true;
var langs: Array<string> = ["java, javascript"];



etiqueta.innerHTML= nombre + " "+ edad;


var a= 7;
var b= 12;

if(a==7){
let a = 4;
var b= 1;

console.log("A========>"+a);
console.log("B========>"+b);
}

console.log("A========>"+a);
console.log("B========>"+b);


function devuelveNumero(num:number):string{
	return ""+num;
}

function devuelveString(texto:string):number{
if(texto=="hola"){
	var num=66;
}else{
	num=90;
}
return num;
}

alert(devuelveNumero(30));
alert(devuelveString("hola"));