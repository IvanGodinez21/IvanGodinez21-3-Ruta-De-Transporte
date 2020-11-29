const Interfaz = (function () {
    function mostrarAlerta(tipo, mensaje) {
        alert(`${tipo}\n\n${mensaje}`);
    }
    function mostrarBase(producto) {
        let tablecodigo = document.getElementById('tablecodigo');
        let tablenombre = document.getElementById('tablenombre');
        let tabledescripcion = document.getElementById('tabledescripcion');
        let tablecantidad = document.getElementById('tablecantidad');
        let tablecosto = document.getElementById('tablecosto');
        let tabletotal = document.getElementById('tabletotal');
        tablecodigo.innerText = producto.codigo;
        tablenombre.innerText = producto.nombre;
        tabledescripcion.innerText = producto.descripcion;
        tablecantidad.innerText = producto.cantidad;
        tablecosto.innerText = producto.costo;
        tabletotal.innerText = producto.total;
    }
    function ocultarBase() {
        let tablecodigo = document.getElementById('tablecodigo');
        let tablenombre = document.getElementById('tablenombre');
        let tabledescripcion = document.getElementById('tabledescripcion');
        let tablecantidad = document.getElementById('tablecantidad');
        let tablecosto = document.getElementById('tablecosto');
        let tabletotal = document.getElementById('tabletotal');
        tablecodigo.innerText = '----';
        tablenombre.innerText = '----';
        tabledescripcion.innerText = '----';
        tablecantidad.innerText = '----';
        tablecosto.innerText = '----';
        tabletotal.innerText = '----';
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
    function limpiarBase(nombre, minutos, cboxInsertar, casilla) {
        nombre.value = '';
        minutos.value = '';
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