$(document).ready(function () {
    $('#addButton').on('click', function () {
        console.log(objectBuilder('Add'));
    });

    $('#subtractButton').on('click', function () {
        console.log(objectBuilder('Subtract'));
    });

    $('#multiplyButton').on('click', function () {
        console.log(objectBuilder('Multiply'));
    });

    $('#divideButton').on('click', function () {
        console.log(objectBuilder('Divide'));
    });
});

function objectBuilder(operator) {
    var calcExpression = {
        x: parseInt($('#firstNumber').val()),
        y: parseInt($('#secondNumber').val()),
        type: operator
    }
    return calcExpression;
    //will eventually send calcExpression to AJAX POST 
}

//AJAX POST goes here