function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    // Esto simplemente agrega o quita la clase "active" al menú
    // para mostrarlo u ocultarlo en celular.
    navLinks.classList.toggle('active');
}