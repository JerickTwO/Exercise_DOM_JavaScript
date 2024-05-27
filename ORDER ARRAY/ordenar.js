
function processNumbers() {
    let numbers = document.getElementById("numbers").value;
    let arrayNumbers = numbers.split(',');

    // Ordenar el array de mayor a menor
    arrayNumbers.sort();

    // Mostrar resultados
    document.getElementById("sortedresult").innerHTML = "smallest to largest: <br>" + arrayNumbers.join('. ');
}
