//Prototipos
function Persona() {
    this.nombre = "Luis";
    this.apellido = "Arana";
    this.edad = 21;
    this.paiz = "Guatemala";

}

Persona.prototype.printInfo = function () {
    console.log(this.nombre + " " + this.apellido + " (" + this.edad + ")");
}

var luis = new Persona();

console.log(luis);
console.log(luis.paiz);
luis.printInfo();

//No es recomendable
Number.prototype.esPositivo = function () {
    if (this > 0) {
        return true;
    } else {
        return false;
    }
}

