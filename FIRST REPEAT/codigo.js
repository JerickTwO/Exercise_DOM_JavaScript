document.getElementById('check-button').addEventListener('click', function() {
    
    const input = document.getElementById('number-input').value;
    const numbers = input.split(',').map(Number);

    const frequency = {};
    numbers.forEach(number => {
        frequency[number] = (frequency[number] || 0) + 1;
    });

    const repeatedNumbers = [];
    for (const number in frequency) {
        if (frequency[number] > 1) {
            repeatedNumbers.push(number);
        }
    }

    const resultadoElement = document.getElementById('result');
    if (repeatedNumbers.length > 0) {
        resultadoElement.textContent = `The repeated number is : ${repeatedNumbers.join(', ')}`;
    } else {
        resultadoElement.textContent = 'There are no repeated numbers.';
    }
});
