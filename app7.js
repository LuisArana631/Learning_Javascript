//-----Expresiones Regulares-----
var reg1 = RegExp("a");
var reg2 = /a/;

var texto = "Hola mundo";

var arrVal = texto.match(/[a-zA-Z]+/g);
console.log(arrVal);

//-----Punto y coma-----
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;;;;;;;;;;;;;;;;;;;;; var a = 10;;;;;;;;;;;;;;;;;;;;;;
;;;;;;;;;;;;;;;;;;;;;; var b = 20;;;;;;;;;;;;;;;;;;;;;;
;;;;;;;;;;;;;;;;;;;;;; var c = 30;;;;;;;;;;;;;;;;;;;;;;
;;;;;;;;;;;;;;;;;;;;;; var d = "Luis";;;;;;;;;;;;;;;;;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;;;;;;;;;;;;;;;;;;;;; console.log(a);;;;;;;;;;;;;;;;;;
;;;;;;;;;;;;;;;;;;;;;; console.log(b);;;;;;;;;;;;;;;;;;
;;;;;;;;;;;;;;;;;;;;;; console.log(c);;;;;;;;;;;;;;;;;;
;;;;;;;;;;;;;;;;;;;;;; console.log(d);;;;;;;;;;;;;;;;;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

function getNumero() {
    return 10;
}
console.log(getNumero());

//-----Comentarios y espacios-----

//  Linea simple
/*  Comentario
    Multilinea  */

var arr = ["Luis", {
    nombre: "Luis",
    apellido: "Arana",
    getNombre: function () {
        return this.nombre + " " + this.apellido;
    }
}, true, function () { console.log(this); }];
console.log(arr);

//-----Palabras reservadas-----

/* Tener cuidado con las palabras reservadas */

//-----Manejo de errores-----

try {
    var a = 100;
} catch (e) {
    console.log(e);
} finally {
    console.log("Ejecucion final del proceso");
}