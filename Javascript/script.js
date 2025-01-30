document.addEventListener("DOMContentLoaded", function () {
    const titulo = document.getElementById("titulo");

    // Manejar el evento de scroll para el título sticky
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            titulo.classList.add("sticky");
        } else {
            titulo.classList.remove("sticky");
        }
    });
});

// Alternar expansión de la imagen
function toggleExpandir(imagen) {
    imagen.classList.toggle("expandida"); // Alterna la clase expandida
}
