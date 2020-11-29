const Interfaz = (function () {
    function mostrarAlerta(tipo, mensaje) {
        alert(`${tipo}\n\n${mensaje}`);
    }
    function mostrarBase(base) {
        let tablenombre = document.getElementById('tablenombre');
        let tableduracion = document.getElementById('tableduracion');
        tablenombre.innerText = base.nombre;
        tableduracion.innerText = base.duracion;
    }
    function ocultarBase() {
        let tablenombre = document.getElementById('tablenombre');
        let tableduracion = document.getElementById('tableduracion');
        tablenombre.innerText = '----';
        tableduracion.innerText = '----';
    }
    function listar(aux) {
        let table = document.getElementById('lista');
        table.innerHTML = '';
        let cabecera = table.insertRow(-1);
        let titulo1 = cabecera.insertCell(0);
        let titulo2 = cabecera.insertCell(1);
        titulo1.textContent = 'Código';
        titulo2.textContent = 'Nombre';
        while (aux != null) {
            let fila = table.insertRow(-1);
            let celda1 = fila.insertCell(0);
            let celda2 = fila.insertCell(1);
            celda1.textContent = aux.codigo;
            celda2.textContent = aux.nombre;
            aux = aux.siguiente;
        }
    }
    function mostrarInsertar(cboxInsertar) {
        if (cboxInsertar.checked == true) {
            let divinsertar = document.getElementById('divinsertar');
            divinsertar.innerHTML = '<input name="casilla" type="number" placeholder="Casilla" id="casilla" />';
        } else if (cboxInsertar.checked == false) {
            let casilla = document.querySelector('#casilla');
            casilla.remove();
        }
    }
    function limpiarBase(nombre, duracion, cboxInsertar, casilla) {
        nombre.value = '';
        duracion.value = '';
        cboxInsertar.checked = false;
        if (casilla) {
            casilla.remove();
        }
    }
    function limpiarTarjeta(baseInicio, horaInicio, horaFin) {
        baseInicio.value = '';
        horaInicio.value = '';
        horaFin.value = '';
    }
    return {
        mostrarAlerta: mostrarAlerta,
        mostrarBase: mostrarBase,
        ocultarBase: ocultarBase,
        listar: listar,
        mostrarInsertar: mostrarInsertar,
        limpiarBase: limpiarBase,
        limpiarTarjeta: limpiarTarjeta
    }
});
export {
    Interfaz
};