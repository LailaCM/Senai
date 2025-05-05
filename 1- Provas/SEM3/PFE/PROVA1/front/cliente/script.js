
const modal = document.getElementById('modalcliente');
const btnAbrir = document.getElementById('NovoCliente');
const btnFechar = document.querySelector('.fechar');

btnAbrir.addEventListener('click', () => {
    modal.style.display = 'block';
});

btnFechar.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});