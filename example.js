// Array de nombres
const nombres = ['Juan', 'María', 'Carlos', 'Laura', 'Pedro'];

// Función para agregar cada nombre a una lista en el HTML
const agregarNombreALista = (nombre) => {
    const lista = document.getElementById('listaNombres');
    const nuevoElemento = document.createElement('li');
    nuevoElemento.textContent = nombre;
    lista.appendChild(nuevoElemento);
};

// Utilizamos forEach para agregar cada nombre a la lista en HTML
nombres.forEach(agregarNombreALista);