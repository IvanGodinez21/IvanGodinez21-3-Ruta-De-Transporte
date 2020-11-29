//Clases
import {
    Interfaz
} from './classes/interfaz.js';
import {
    Ruta
} from './classes/ruta.js';
import {
    Base
} from './classes/base.js';
//Interfaz
var interfaz = new Interfaz
//Botones
const btnAgregar = document.querySelector('#btnAgregar');
const btnEliminar = document.querySelector('#btnEliminar');
const btnBuscar = document.querySelector('#btnBuscar');
const btnImprimir = document.querySelector('#btnImprimir');
const btnLimpiarBase = document.querySelector('#btnLimpiarBase');
const btnCrear = document.querySelector('#btnCrear');
const btnLimpiarTarjeta = document.querySelector('#btnLimpiarTarjeta');
//Checkbox
const cboxInsertar = document.querySelector('#cboxInsertar');
//Variables
var ruta = new Ruta(1);
var base;
console.clear();
console.log(ruta.inicio);
btnAgregar.addEventListener('click', () => {
    let nombre = document.getElementById('nombre').value;
    let duracion = document.getElementById('duracion').value;
    let casilla = document.getElementById('casilla');
    if (nombre != '' && duracion != '') {
        console.clear();
        if (!casilla) {
            if (ruta.inicio == null) {
                base = new Base(nombre, duracion);
                ruta.agregar(base);
            } else {
                var aux = new Base(nombre, duracion);
                if (ruta.buscar(aux.nombre) != null) {
                    if (ruta.buscar(aux.nombre).nombre != aux.nombre) {
                        ruta.agregar(base, aux);
                        base = aux;
                    } else {
                        interfaz.mostrarAlerta('🚫 Error 🚫', 'No puedes añadir bases con el mismo nombre');
                    }
                } else {
                    ruta.agregar(aux);
                    base = aux;
                }
            }
        } else {
            if (casilla.value != '') {
                var aux = new Base(nombre, duracion);
                if (ruta.buscar(aux.nombre) != null) {
                    if (ruta.buscar(aux.nombre).nombre != aux.nombre) {
                        ruta.insertar(aux, casilla.value);
                        base = aux;
                    } else {
                        interfaz.mostrarAlerta('🚫 Error 🚫', 'No puedes insertar bases con el mismo nombre');
                    }
                } else {
                    let found = ruta.insertar(aux, casilla.value);
                    base = aux;
                    if (found == false) {
                        interfaz.mostrarAlerta('🚫 Error 🚫', 'No puedes insertar bases al final de la lista');
                    }
                }
            } else {
                interfaz.mostrarAlerta('🚫 Error 🚫', 'Por favor ingresa la casilla en la que se insertará la base');
            }
        }
        console.log(ruta.inicio);
    } else {
        interfaz.mostrarAlerta('🚫 Error 🚫', 'Por favor llena todos los campos');
    }
});
btnEliminar.addEventListener('click', () => {
    let nombre = document.getElementById('nombre').value;
    if (nombre != '') {
        console.clear();
        if (ruta.inicio != null) {
            var found = ruta.eliminar(nombre);
            if (found != null) {
                console.log(ruta.inicio);
                console.log(found);
            } else {
                console.log(ruta.inicio);
                console.log(`Base no encontrada`);
                interfaz.mostrarAlerta('🚫 Error 🚫', 'Base no encontrada');
            }
        } else {
            console.log(ruta.inicio);
            console.log(`No quedan bases`);
            interfaz.mostrarAlerta('🚫 Error 🚫', 'No quedan bases en la ruta');
        }
    } else {
        interfaz.mostrarAlerta('🚫 Error 🚫', 'Por favor indica el nombre de la base a eliminar');
    }
});
btnBuscar.addEventListener('click', () => {
    let nombre = document.getElementById('nombre').value;
    if (nombre != '') {
        console.clear();
        if (ruta.inicio != null) {
            var found = ruta.buscar(nombre);
            console.log(ruta.inicio);
            if (found == undefined) {
                console.log(`Base no encontrada`);
                interfaz.ocultarBase();
                interfaz.mostrarAlerta('🚫 Error 🚫', 'Base no encontrada');
            } else {
                interfaz.mostrarBase(found);
                console.log(found);
            }
        } else {
            console.log(ruta.inicio);
            console.log(`No quedan bases`);
            interfaz.mostrarAlerta('🚫 Error 🚫', 'No quedan bases en la ruta');
        }
    } else {
        interfaz.mostrarAlerta('🚫 Error 🚫', 'Por favor indica el nombre de la base a buscar');
    }
});
btnImprimir.addEventListener('click', () => {
    ruta.listarBases(interfaz);
});
btnLimpiarBase.addEventListener('click', () => {
    let nombre = document.getElementById('nombre');
    let duracion = document.getElementById('duracion');
    let cboxInsertar = document.getElementById('cboxInsertar');
    let casilla = document.getElementById('casilla');
    interfaz.limpiarBase(nombre, duracion, cboxInsertar, casilla);
});
btnCrear.addEventListener('click', () => {
    let baseInicio = document.getElementById('baseInicio').value;
    let horaInicio = document.getElementById('horaInicio').value;
    let horaFin = document.getElementById('horaFin').value;
    if (baseInicio != '' && horaInicio != '' && horaFin != '') {
        console.clear();
        if (ruta.inicio != null) {
            if (ruta.buscar(baseInicio) != null) {
                let horarioInicio = new Date();
                horarioInicio.setHours(horaInicio.slice(0, 2));
                horarioInicio.setMinutes(horaInicio.slice(-2));
                horarioInicio.setSeconds('00');
                let horarioFin = new Date();
                horarioFin.setHours(horaFin.slice(0, 2));
                horarioFin.setMinutes(horaFin.slice(-2));
                horarioFin.setSeconds('00');
                if (horarioInicio < horarioFin) {
                    let recorrido = ruta.crearRecorrido(baseInicio, horarioInicio, horarioFin);
                    console.log(ruta.inicio);
                    console.log(recorrido);
                } else {
                    console.log(ruta.inicio);
                    interfaz.mostrarAlerta('🚫 Error 🚫', 'La hora de inicio no puede ser mayor a la hora final');
                }
            } else {
                console.log(ruta.inicio);
                console.log(`Base no encontrada`);
                interfaz.mostrarAlerta('🚫 Error 🚫', 'Especifica una base valida previamente creada');
            }
        } else {
            console.log(ruta.inicio);
            console.log(`No quedan bases`);
            interfaz.mostrarAlerta('🚫 Error 🚫', 'No hay bases registradas, por favor ingresa una como mínimo');
        }
    } else {
        interfaz.mostrarAlerta('🚫 Error 🚫', 'Por favor llena todos los campos');
    }
});
btnLimpiarTarjeta.addEventListener('click', () => {
    let baseInicio = document.getElementById('baseInicio');
    let horaInicio = document.getElementById('horaInicio');
    let horaFin = document.getElementById('horaFin');
    interfaz.limpiarTarjeta(baseInicio, horaInicio, horaFin);
});
cboxInsertar.addEventListener('click', () => {
    interfaz.mostrarInsertar(cboxInsertar);
});