const Base = (function (nombre, duracion) {
    this.nombre = nombre;
    this.duracion = duracion;
    this.anterior = null;
    this.siguiente = null;
});
export {
    Base
};