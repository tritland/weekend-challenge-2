//empty variable to hold x and y values
var number = '';

//empty object to populate with data to send to server
var calcExpression = {
    x: '',
    y: '',
    type: ''
};

$(document).ready(function () {

//below are click events that display button values on screen and call functions

    $('.numberButton').on('click', function () {
        $('#screen').append($(this).val() + ' '); //couldn't get this to work as a function for some reason
        var clickedButton = this.value;
        number += clickedButton; //concatenates number entries
        console.log(number);
    });

    $('#addButton').on('click', function () {
        $('#screen').append($(this).val() + ' ');
        objectBuilder('Add');
    });

    $('#subtractButton').on('click', function () {
        $('#screen').append($(this).val() + ' ');
        objectBuilder('Subtract');
    });

    $('#multiplyButton').on('click', function () {
        $('#screen').append($(this).val() + ' ');
        objectBuilder('Multiply');
    });

    $('#divideButton').on('click', function () {
        $('#screen').append($(this).val() + ' ');
        objectBuilder('Divide');
    });
    
    $('#equalButton').on('click', function () {
        secondNumber();
        postCalcExpression();
    });
 
    $('#clearButton').on('click', function () {
        clearInput();
    });
});

//adds x value and operator type value to calcExpression object
//clears number variable to allow y value to be entered
function objectBuilder(operator) {
    calcExpression.x = number;
    calcExpression.type = operator;
    number = '';
    console.log(calcExpression);
};

//adds y value to calcExpression object
function secondNumber() {
    calcExpression.y = number;
    console.log(number);
    console.log(calcExpression);
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
    });
};

//displays result on DOM in display screen
function resultToDom(response) {
    $('#screen').text(response.value);
};

//clears display, and resets calcExpression object and number variable
function clearInput() {
    $('#screen').text('');
    number = '';
    calcExpression = {
        x: '',
        y: '',
        type: ''
    };
};