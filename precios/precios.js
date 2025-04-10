const planToggle = document.getElementById('plan-toggle');
const preciosMensuales = document.querySelectorAll('.precio-mensual');
const preciosAnuales = document.querySelectorAll('.precio-anual');

planToggle.addEventListener('change', function() {
    if (this.checked) {
        preciosMensuales.forEach(precio => precio.style.display = 'none');
        preciosAnuales.forEach(precio => precio.style.display = 'table-cell');
    } else {
        preciosMensuales.forEach(precio => precio.style.display = 'table-cell');
        preciosAnuales.forEach(precio => precio.style.display = 'none');
    }
});