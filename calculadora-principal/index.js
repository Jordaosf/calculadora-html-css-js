const displayValorAnterior = document.getElementById('valor-anterior');
const displayValorAtual = document.getElementById('valor-atual');
const buttonNumber = document.querySelectorAll('.numero');
const buttonOperator = document.querySelectorAll('.operador');

const display = new Display(displayValorAnterior, displayValorAtual);

buttonNumber.forEach(button => {
    button.addEventListener('click', () => display.agregarNumero(button.innerHTML));
});

buttonOperator.forEach(button => {
    button.addEventListener('click', () => display.computar(button.value))
});