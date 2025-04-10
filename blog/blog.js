const tags = document.querySelectorAll('.tag');
const categorias = document.querySelectorAll('.categoria');
const articulos = document.querySelectorAll('.articulo');

tags.forEach(tag => {
    tag.addEventListener('click', function() {
        const tagSeleccionado = this.dataset.tag;
        articulos.forEach(articulo => {
            if (articulo.dataset.tags.includes(tagSeleccionado)) {
                articulo.style.display = 'block';
            } else {
                articulo.style.display = 'none';
            }
        });
    });
});

categorias.forEach(categoria => {
    categoria.addEventListener('click', function() {
        const categoriaSeleccionada = this.dataset.categoria;
        articulos.forEach(articulo => {
            if (articulo.dataset.categorias.includes(categoriaSeleccionada)) {
                articulo.style.display = 'block';
            } else {
                articulo.style.display = 'none';
            }
        });
    });
});