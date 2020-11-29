const Ruta = (function (numero) {
    this.numero = numero;
    this.inicio = undefined;
    function agregar(base) {
        if (this.inicio == null) {
            this.inicio = base;
            this.inicio.siguiente = this.inicio;
            this.inicio.anterior = this.inicio;
        } else {
            let aux = this.inicio;
            while (aux.siguiente != this.inicio) {
                aux = aux.siguiente;
            }
            aux.siguiente = base;
            aux.siguiente.anterior = aux;
            aux.siguiente.siguiente = this.inicio;
            this.inicio.anterior = base;
        }
        return base;
    }
    function insertar(base, casilla) {
        let aux = this.inicio
        if (casilla == 1) {
            base.siguiente = aux
            base.anterior = aux.anterior
            base.anterior.siguiente = base
            aux.anterior = base
            this.inicio = base
        } else {
            var i = 1
            while (i != casilla) {
                if (aux.siguiente != this.inicio) {
                    aux = aux.siguiente;
                    i++;
                } else {
                    break;
                }
            }
            if (i == casilla) {
                try {
                    base.anterior = aux.anterior;
                    base.siguiente = aux
                    base.anterior.siguiente = base
                    base.siguiente.anterior = base
                    return true;
                } catch (error) {
                    console.log('error')
                    return false;
                }
            } else {
                return false;
            }
        }
    }
    function buscar(base) {
        let aux = this.inicio;
        if (aux != null) {
            while (aux.nombre != base && aux.siguiente != this.inicio) {
                aux = aux.siguiente;
            }
            if (aux.nombre == base) {
                return aux;
            }
        }
    }
    function eliminar(base) {
        let aux = this.inicio;
        if (this.inicio.nombre == base && this.inicio.anterior == this.inicio && this.inicio.siguiente == this.inicio) {
            this.inicio = null;
        } else if (this.inicio.nombre == base) {
            this.inicio.siguiente.anterior = this.inicio.anterior;
            this.inicio.anterior.siguiente = this.inicio.siguiente;
            this.inicio = this.inicio.siguiente;
        } else {
            while (aux.siguiente.nombre != base) {
                aux = aux.siguiente;
            }
            if (aux.siguiente.nombre == nombre) {
                aux.siguiente = aux.siguiente.siguiente;
                aux.siguiente.anterior = aux;
                return aux
            }
        }
    }
    function listarBases(interfaz) {
        interfaz.listar(this.inicio);
    }
    function crearRecorrido(inicio, horaInicio, horaFinal) {}
    return {
        agregar: agregar,
        insertar: insertar,
        buscar: buscar,
        eliminar: eliminar,
        listarBases: listarBases,
        crearRecorrido: crearRecorrido
    };
});
export {
    Ruta
};