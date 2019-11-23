function Invocador(nombre) {
    this.nombre = nombre;
    this.vida = 100;
    this.mana = 100;

    this.curar20 = function (invocadorObj) {
        if (this.mana >= 40) {
            invocadorObj.vida += 20;
            this.mana -= 40;
            this.resumen(invocadorObj);
        } else {
            console.warn(this.nombre + " ya no tienes mana.");
        }
    }

    this.lanzarQ = function (invocadorObj) {
        if (invocadorObj.vida >= 30) {
            invocadorObj.vida -= 30;
            this.mana -= 20;
            this.resumen(invocadorObj);
        } else {
            console.error(invocadorObj.nombre + " murio.")
        }
    }

    this.resumen = function (invocadorObj) {
        console.warn(this);
        console.warn(invocadorObj);
        console.log("--------")
    }
}

var garen = new Invocador("Garen");
var darius = new Invocador("Darius");

console.log(garen);
console.log(darius);
console.log("--------")
garen.curar20(garen);
console.log(garen);
console.log(darius);
console.log("--------")