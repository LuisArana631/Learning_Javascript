//-----Funciones typeof e instanceof-----
function identificar(parametro) {
    if (typeof parametro == "function") {
        parametro();
    } else {
        console.log(parametro);
    }
}

identificar(function () {
    console.log("Función anonima");
})

identificar(3);

function instanciaIdent(param) {
    console.log(param instanceof Persona);
}

function Persona() {
    this.nombre = "Luis";
    this.edad = 30;
}

var luis = new Persona();

identificar(luis);
instanciaIdent(luis);

//-----Arreglos-----
var arr = [0, 1, 2, 3, 4];
console.log(arr);
console.log(arr[2]);
//Voltear
arr.reverse();
console.log(arr);
//Realizar funcion con cada elemento
arr = arr.map(function (i) {
    i *= i;
    return i;
});
console.log(arr);
arr = arr.map(Math.sqrt);
console.log(arr);
//Convertir el arreglo en un string concatenado
arr = arr.join("|");
console.log(arr);
console.log(typeof arr);
//Cortar el arreglo 
arr = arr.split("|");
console.log(arr);
//Insertar dato
arr.push("7");
console.log(arr);
arr.unshift("0");
console.log(arr);
console.log(arr.toString());
//Sacar dato
var eliminado = arr.pop();
console.log(arr, eliminado);
//Eliminar determinados e insertar
arr.splice(1, 2, "5");
console.log(arr);
arr.splice(1, 0, "10", "20");
console.log(arr);
//Funcion opuesta al splice
arr = arr.slice(0, 1);
console.log(arr);
//Parte 2
var arreglo = [
    true,
    {
        nombre: "Luis",
        edad: 21
    },
    function () {
        console.log("Son una funcion en un arreglo");
    },
    function (persona) {
        console.log(persona.nombre + " (" + persona.edad + ")")
    },
    [
        "Enero",
        "Febrero",
        "Noviembre",
        "Diciembre",
        [
            "Lunes",
            "Martes",
            "Miercoles",
            function () {
                console.log(this);
            }
        ]
    ]
];
console.log(arreglo.length);
console.log(arreglo);
console.log(arreglo[0]);
console.log(arreglo[1].nombre + " " + arreglo[1].edad);
arreglo[2]();
arreglo[3](arreglo[1]);
console.log(arreglo[4][1]);
console.log(arreglo[4][4][2]);
var dia = arreglo[4][4];
console.log(dia);
dia[2] = "Miercole";
console.log(dia);
console.log(arreglo);
dia[3]();

//-----Argumento de funciones-----
var arguments = 10;

function miFuncion(a, b, c, d) {
    //console.log(arguments);
    if (arguments.length !== 4) {
        console.error("Necesitas 4 parametros");
    } else {
        console.log(a + b + c + d);
    }
}

miFuncion();
miFuncion(50, 30, 10);
miFuncion(50, 30, 10, 0);

//-----Sobrecarga de Operadores-----
function crearProducto(nombre, precio) {
    nombre = nombre || "Desconocido";
    precio = precio || 0;
    console.log("Producto: ", nombre, ", Precio: ", precio);
}

function crearProducto100(nombre) {
    crearProducto(nombre, 100);
}

crearProducto();
crearProducto("Cuaderno");
crearProducto("Salsa", 6);
crearProducto100("Camisa");

//-----Polimorfismo-----
function determinarDato(a) {
    if (a === undefined) {
        console.log("Que es esto... No me mandes undefined");
    }
    if (typeof a === "number") {
        console.log("Genial, un numero, que hago?");
    }
    if (typeof a === "string") {
        console.log("Que mamadas dice este string");
    }
    if (typeof a === "object") {
        console.log("Un objeto, que trae un objeto, que trae otro objeto");
        if (a instanceof Number) {
            console.log("Esta mierda es un numero");
        }
    }

}

var b = new Number(3);
console.log(b);
determinarDato(b);

//-----Funciones y su contexto-----
function crearFunciones() {
    var arregloFn = [];
    var numero = 1;

    for (var numero = 1; numero <= 3; numero++) {
        arregloFn.push(
            (function (numero) {
                return function () {
                    console.log(numero);
                }
            })(numero)
        );
    }

    return arregloFn;
}

var funciones = crearFunciones();
funciones[0]();
funciones[1]();
funciones[2]();

//-----Objeto numero-----
var numA = 3.141516;
console.log(numA);
console.log(numA.toFixed(3));
console.log(numA.toPrecision(2));

numA = 10;
numA *= 100000000000000000000000000;
numA *= 100000000000000000000000000;
numA *= 100000000000000000000000000;
numA *= 100000000000000000000000000;
numA *= 100000000000000000000000000;
numA *= 100000000000000000000000000;
numA *= 100000000000000000000000000;
numA *= 100000000000000000000000000;
numA *= 100000000000000000000000000;
numA *= 100000000000000000000000000;
numA *= 100000000000000000000000000;
//numA *= 100000000000000000000000000;
console.log(numA);

//-----Objeto booleano-----
var boolTrue = true;
var boolFalse = false;
var booleano = new Boolean();
console.log(boolTrue);
console.log(boolFalse);
console.log(booleano);

if(booleano){
    console.log("Me imrimi!!");
}

if(boolFalse){
    console.log("Me imrimi!!x2");
}

//-----Objeto string-----
var objString = new String("Luis Fernando");
var varString = "Pokemon";

console.log(objString);
console.log(objString.toUpperCase());
console.log(objString.toLowerCase());

var indice = objString.indexOf("u");
console.log("letra esta en: ", indice);

var nombreSplit = objString.substr(0, objString.indexOf(" "));
console.log(nombreSplit);














