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
const btnLimpiarTarjeta = document.querySelector('#btnLimpiarTarjeta');
//Checkbox
const cboxInsertar = document.querySelector('#cboxInsertar');
//Variables
var ruta = new Ruta(1);
var base;
btnAgregar.addEventListener('click', () => {
    let nombre = document.getElementById('nombre').value;
    let minutos = document.getElementById('minutos').value;
    let casilla = document.getElementById('casilla');
    if (nombre != '' && minutos != '') {
        console.clear();
        if (!casilla) {
            if (ruta.inicio == null) {
                base = new Base(nombre, minutos);
                ruta.agregar(base);
            } else {
                var aux = new Base(nombre, minutos);
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
                var aux = new Base(nombre, minutos);
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
        console.log(ruta);
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
                console.log(ruta);
                console.log(found);
            } else {
                console.log(ruta);
                console.log(`Base no encontrada`);
                interfaz.mostrarAlerta('🚫 Error 🚫', 'Base no encontrada');
            }
        } else {
            console.log(ruta);
            interfaz.mostrarAlerta('🚫 Error 🚫', 'No quedan bases en la ruta');
        }
    } else {
        interfaz.mostrarAlerta('🚫 Error 🚫', 'Por favor indica el nombre de la base a eliminar');
    }
});
btnBuscar.addEventListener('click', () => {});
btnImprimir.addEventListener('click', () => {});
btnLimpiarBase.addEventListener('click', () => {
    let nombre = document.getElementById('nombre');
    let minutos = document.getElementById('minutos');
    let cboxInsertar = document.getElementById('cboxInsertar');
    let casilla = document.getElementById('casilla');
    interfaz.limpiarBase(nombre, minutos, cboxInsertar, casilla);
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