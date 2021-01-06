const btnToggle = document.querySelector('.toggle-btn'); //Permite seleccionar un elemento

btnToggle.addEventListener('click', function () {
    document.getElementById('sidebar').classList.toggle('active'); //toggle permite agregar una clase si no lo tiene o quitarsela si ya lo tiene
}); 