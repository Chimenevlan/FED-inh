var plusButton = document.querySelector("#amount button:nth-of-type(2)");
var minButton = document.querySelector("#amount button:nth-of-type(3)");
var amountInput = document.querySelector("#amount input");

plusButton.onclick = plus;
minButton.onclick = min;

function plus() {
    var currentValue = parseInt( amountInput.value );
    var newValue = currentValue + 1;

    if (newValue == 4 ) {
        newValue = 3;
    }

    amountInput.value = newValue;
}

function min() {
    var currentValue = parseInt( amountInput.value );
    var newValue = currentValue - 1;

    if (newValue == -1 ) {
        newValue = 0;
    }


    amountInput.value = newValue;
}