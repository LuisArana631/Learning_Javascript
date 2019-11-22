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
    console.log(dia + "/" + mes + "/" + año);
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
    name: "Javascript"
}
var referencia = user;
console.log("user: ", user, ", referencia: ", referencia);
user.name = "Ionic";
console.log("user: ", user, ", referencia: ", referencia);

//Tipo de acceder a valores de un objeto
//Por punto
var persona = {
    nombrePersona: "Marielos",
    edadPersona: 21,
    apellidoPersona: "Paz",

    direccion: {
        paiz: "Guatemala",
        calle: "12 calle",
        edificio: {
            letra: "D",
            apto: 404
        }
    }
}
console.log(persona.nombrePersona);
console.log(persona.direccion);
console.log(persona.direccion.paiz);

persona.direccion.zipcode = 1021;
console.log(persona.direccion);

console.log("apartamento: ", persona.direccion.edificio.apto);

var edificio = persona.direccion.edificio;
edificio.nivel = "primer nivel";
console.log(persona);

//Por corchete
var campo = "edadPersona";
console.log(persona["nombrePersona"]);
console.log(persona["direccion"]["paiz"]);
console.log(persona[campo]);

//Funciones
var a = 30;

function primerFuncion() {
    var a = 20;
    console.log(a);
}
primerFuncion();
var resultadoPrimeraFuncion = primerFuncion();
console.log(resultadoPrimeraFuncion);
var miFuncion = primerFuncion;
miFuncion();

//Parametros
function mostrar(texto, año, dia) {
    //Evaluar si el parametro viene vacio, dos formas
    if (año === undefined) {
        año = 2019;
    }
    dia = dia || "A ver que paso aqui?";
    console.log(texto + " " + año + " " + dia);
}

mostrar("Hola mundo x2!", 1998);
mostrar("Hola mundo x2!");

function mostrarObj(persona) {
    console.log(persona.nombre + " " + persona.apellido);
}

mostrarObj({
    nombre: "Luis",
    apellido: "Arana"
});

function mostrarFn(fn) {
    fn();
}

mostrarFn(function () {
    console.log("Funcion anonima");
});

var miFn = function () {
    console.log("Mi Fn");
}

mostrarFn(miFn);

//Funciones con valores de retorno
function numAleatorio() {
    return Math.random();
}

console.log(numAleatorio() + 10);

function getNombre() {
    return "Spiderman";
}

console.log("Hola " + getNombre());

function evaluarNum() {
    if (numAleatorio() > 0.5) {
        return true;
    } else {
        return false;
    }
}

if (evaluarNum()) {
    console.log("El numero es mayor a 0.5");
} else {
    console.log("El numero es menor a 0.5");
}

function crearUsuario(user, password) {
    return {
        user: user,
        password: password
    }
}

var usuario = crearUsuario("user2019", "1234");
console.log("usuario: ", usuario.user, " contraseña: ", usuario.password);

function crearFuncion() {
    return function (user) {
        console.log("Me crearon lptm by " + user);
    }
}

var nuevaFuncion = crearFuncion();
nuevaFuncion(usuario.user);