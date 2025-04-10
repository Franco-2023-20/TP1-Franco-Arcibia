const botonModoOscuro = document.getElementById('modo-oscuro');
const body = document.body;

botonModoOscuro.addEventListener('click', function() {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        botonModoOscuro.textContent = 'Modo Claro';
    } else {
        botonModoOscuro.textContent = 'Modo Oscuro';
    }
});