function calcularPrecio() {

    let cantidad = parseInt(document.getElementById('hours').value);
    let precioUnitario = 150;

    let total = cantidad * precioUnitario;

    document.getElementById('resultado').innerText = 'El resultado es: Bs.' + total;
    

}