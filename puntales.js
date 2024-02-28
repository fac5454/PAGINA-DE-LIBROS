function calcularPrecio () {
    let quantity = parseInt(document.getElementById('hours').value);
    let days = parseInt(document.getElementById('days').value);
    let size = document.getElementById('size').value;
    let precioUnitario = 0;
    
    switch(size) {
        case 'size1':
            precioUnitario = 0.4;
            break;

        case 'size2':
            precioUnitario = 0.6;
            break;
    }

    let total = quantity * precioUnitario * days;

    document.getElementById('resultado').innerText = 'El resultado es: Bs.' + total;

}