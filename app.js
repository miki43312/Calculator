document.getElementById('btn').addEventListener('click', function() {
    let num1 = Number(document.querySelector('.num1').value);
    let num2 = Number(document.querySelector('.num2').value);
    let result = document.querySelector('.result');
    let operator = document.getElementById('selectOp').value;

    switch (operator) {
        case 'plus':
            result.innerHTML = num1 + num2;
            break;
        case 'min':
            result.innerHTML = num1 - num2;
            break;
        case 'div':
            result.innerHTML = num1 / num2;
            break;
        case 'multi':
            result.innerHTML = num1 * num2;
            break;
        default:
            result.innerHTML = 'Invalid operator';
    }
});