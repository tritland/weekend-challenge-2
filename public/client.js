//empty object to populate with data to send to server
var calcExpression = {};

//click functions for math operator buttons that include a function to 
//build objects and a function to post those objects to server
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

//puts numbers entered and operator clicked into an object
function objectBuilder(operator) {
    calcExpression = {
        x: parseInt($('#firstNumber').val()),
        y: parseInt($('#secondNumber').val()),
        type: operator
    };
};

//posts object to server and calls the GET function to retrieve the 
//result back from the server
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

//GETs response from server and calls function to display result on DOM
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

//displays result on DOM
function resultToDom(response) {
    $('#result').text(response.value);
};

//clears result and input fields when Clear is clicked
function clearInput() {
    $('#firstNumber').val('');
    $('#secondNumber').val('');
    $('#result').text('');
}