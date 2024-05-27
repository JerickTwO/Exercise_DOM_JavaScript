function cambiarColorFondo() {
    // Generar un color hexadecimal aleatorio
    const colorHexadecimal = "#" + Math.floor(Math.random()*16777215).toString(16);

    // Establecer el color de fondo del body y actualizar el color mostrado
    document.body.style.backgroundColor = colorHexadecimal;
    document.getElementById("color").textContent = colorHexadecimal;

    // Función para copiar el color al portapapeles
}

