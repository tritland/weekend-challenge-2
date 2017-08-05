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
            getResult();
        }
    });
};

function getResult() {
    $.ajax({
        method: 'GET',
        url: '/calc',
        success: function (response) {
            console.log(response);
            resultToDom(response);
        }
    })
}

function resultToDom(response) {
    $('#result').text(response.value);
};

function clearInput() {
    $('#firstNumber').val('');
    $('#secondNumber').val('');
    $('#result').text('');
}