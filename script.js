const displayWindow = document.getElementById('window');
const allButtons = document.querySelectorAll('.calc-button');

allButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const buttonText = e.target.textContent;
        displayWindow.textContent += buttonText;
    })
})

function operate(arr) {
    const a = parseFloat(arr[0]);
    const op = arr[1];
    const b = parseFloat(arr[2]);
    let result;
    switch (op) {
        case '+':
            result = (a + b);
            break;
        case '-':
            result = (a - b);
            break;
        case '÷':
            if (b === 0) {
                return "SELF DESTRUCT"
            }
            result = (a / b);
            break;
        case 'x':
            result = (a * b);
            break;
        }
    return result.toLocaleString('en-US', {
        maximumFractionDigits: 3,
        useGrouping: false
    });
}

const equalButton = document.getElementById('=');

equalButton.addEventListener('click', () => {
    const windowStr = displayWindow.textContent;
    const windowArr = windowStr.split(" ");
    displayWindow.textContent = operate(windowArr);
});

const clearButton = document.getElementById('C');

clearButton.addEventListener('click', () => {
    displayWindow.textContent = '';
});





