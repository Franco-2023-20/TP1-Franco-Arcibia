const form = document.getElementById('contacto-form');
const spinner = document.getElementById('spinner');
const modal = document.getElementById('modal');
const cerrarModal = document.getElementById('cerrar-modal');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    spinner.style.display = 'block';

    // Simulación de envío de formulario (reemplazar con tu lógica de envío)
    setTimeout(function() {
        spinner.style.display = 'none';
        modal.style.display = 'block';
        form.reset();
    }, 2000);
});

cerrarModal.addEventListener('click', function() {
    modal.style.display = 'none';
});