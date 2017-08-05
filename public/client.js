var calcExpression = {};

$(document).ready(function () {
    $('#addButton').on('click', function () {
        objectBuilder('Add');
        postCalcExpression();
    });

    $('#subtractButton').on('click', function () {
        objectBuilder('Subtract');
        postCalcExpression();
    });

    $('#multiplyButton').on('click', function () {
        objectBuilder('Multiply');
        postCalcExpression();
    });

    $('#divideButton').on('click', function () {
        objectBuilder('Divide');
        postCalcExpression();
    });

    $('#clearButton').on('click', function () {
        clearInput();
    });
});

function objectBuilder(operator) {
    calcExpression = {
        x: parseInt($('#firstNumber').val()),
        y: parseInt($('#secondNumber').val()),
        type: operator
    };
};

function postCalcExpression() {
    $.ajax({
        method: 'POST',
        url: '/calc',
        data: calcExpression,
        success: function (response) {
            console.log(response);
        }
    });
};

//add something like these to Post eventually:  getMessages(); clearInput();

function clearInput() {
    $('#firstNumber').val('');
    $('#secondNumber').val('');
}