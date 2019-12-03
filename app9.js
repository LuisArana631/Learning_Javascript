//-----Call(), Bind(), Apply()-----
var carro = {
    color: "Blanco",
    marca: "Mercedez",
    imprimir: function () {
        var salida = this.marca + " - " + this.color;
        return salida;
    }
}

var carro2 = {
    color: "Blanco",
    marca: "Ferrari"
}

console.log(carro.imprimir());

var logCarro = function (arg1, arg2) {
    console.log("Carro: ", this.imprimir());
    console.log("Argumentos: ", arg1, arg2);
    console.log("==========================");
}
var logModeloCarro = logCarro.bind(carro);
logModeloCarro();
logModeloCarro("abc", "123");

logModeloCarro.call(carro, "789", "xyz");
logModeloCarro.apply(carro, ["qwe", "rty"]);

//-----Funciones prestadas-----
console.log(carro.imprimir.call(carro2));

//-----If...Else-----
var nota = 30;

if (nota === 100) {
    console.log("Pshhh que mamon");
} else if (nota > 60 && nota < 100) {
    console.log("Aprobaste cerote jajaja!");
} else {
    console.log("Reprobaste que triste mano");
}

var c = (10 > 20) ? function () {
    console.log("10 es mayor a 20");
    return 10;
}() : function () {
    console.log("20 es mayor a 10");
    return 20;
}();

console.log(c);

//-----Switch-----
var mes = 2;
switch (mes) {
    case 1:
        console.log("Enero");
        break;
    case 2:
        console.log("Febrero");
        break;
    case 3:
        console.log("Marzo");
        break;
    default:
        console.log("No tenemos ese mes");
}


