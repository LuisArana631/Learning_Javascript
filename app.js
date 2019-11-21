//Variables globales javascript
//Con valor asignado
var nombre = "Luis";
var numero = 21;
var dia = 21;
//Con valor undefinido
var año;

//Salida de contenido en consola
console.log(nombre);
console.warn(nombre);
console.error(nombre);
console.info(nombre);
console.log(año);
console.log(mes);
console.log(vivo);
console.log(numero + numero)

//Variable undefinida
var mes = "diciembre";
var vivo = true;

//Salida de variables
console.log(mes);
console.log(vivo);

//Asignar un valor a variable
año = 2019;

//Funciones javascript
function imprimir() {
    for (var i = 0; i < 100; i++) {
        console.log(nombre, " Imprimio ", i);
    }
}
imprimir();

//Llamado desde index por medio del boton
function mostrarAño() {
    console.log(dia, "/", mes, "/", año);
}

//Tipos de datos primitivos 
var booleano = true;
var numerico = 15;
var string = "Hola mundo!";
var undefinidos = undefined;
var nulos = null;

//Escritura dinamica
//Al ser variables como objetos, se les puede asignar cualquier tipo de dato
numerico = string;
console.log(numerico);
booleano = 3;
console.log(booleano);

//Tipo de objetos "coleccion de tipos de datos"
//No es necesario colocar un tipo de variable al instanciar variables, el tipo objeto ya guarda memoria
var obj = {
    num: 10,
    texto: "Nuevo texto",
    //Un objeto puede tener otro objeto interior hasta n veces
    objHijo: {
        numero2: 20,
        texto2: "Nuevo texto2"
    }
};
console.log(obj);

//Memoria por valor o referencia
//Pasar datos por valor
var dato = 100;
var porValor = dato;
console.log("dato: ", dato, ", referencia: ", porValor);
var dato = 500;
console.log("dato: ", dato, ", referencia: ", porValor);
//Pasar datos por referencia
var user = {
    name: "Javascript",
}
var referencia = user;
console.log("user: ", user, ", referencia: ", referencia);
user.name = "Ionic";
console.log("user: ", user, ", referencia: ", referencia);

