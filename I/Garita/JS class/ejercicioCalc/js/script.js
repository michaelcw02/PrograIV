
//VARIABLES
var previousValue = 0;
var previousSign = "none";
var isFirstEntry = true;


function getCurrentValue() {
    return document.getElementById("numberDisplay").value;
}
function addValue(value) {
    document.getElementById("numberDisplay").value = value;    
}

function appendNumber(number) {
    var currentValue = getCurrentValue();
    var newValue;
    if(currentValue[0] === "0" && currentValue[1] !== ".") {
        for(var i = 1; i < currentValue.length; i++)
            newValue += currentValue[i];
        (typeof(newValue) === 'undefined') ? newValue = "" : newValue;
        currentValue = newValue;
    }
    if(isFirstEntry) {
        currentValue = "";
        isFirstEntry = false;
    }
    currentValue += number;
    addValue(currentValue); 
}

function checkForDots(value) {
    for (char in value)
        if(value[char] == ".")
            return true;
    return false;
}
function addDot() {
    currentValue = getCurrentValue();
    if(!checkForDots(currentValue)) 
        addValue(currentValue + ".");
}
function equal() {
    var result = 0;
    if(previousSign === "Plus")
        result = previousValue += parseFloat(getCurrentValue());
    if(previousSign === "By")
        result = previousValue *= parseFloat(getCurrentValue());
    if(previousSign === "Minus")
        previousValue -= parseFloat(getCurrentValue());
    if(previousSign === "Divide")
        previousValue /= parseFloat(getCurrentValue());
    addValue(result);
}
function resolve() {
    addValue(previousValue);

}
function setPreviousSign(sign) {
    if(sign === "Dot" || sign === "CE" || sign === "C" || sign === "Equal")
        sign = "none";
    else
        isFirstEntry = true;
    previousSign = sign;
}
function clear() {
    previousValue = 0;
    previousSign = "none";
    addValue("0");
}

function addSign(sign) {
    if(sign === "Dot")
        addDot();
    if(sign === "C")
        clear();
    if(sign === "CE")
        addValue("0");
    if(sign === "Plus") {
        previousValue += parseFloat(getCurrentValue());
        addValue(previousValue);
    }
    if(sign === "By") {
        if (previousValue !== 0) {
            previousValue *= parseFloat(getCurrentValue());
            addValue(previousValue);
        }            
    }
    if(sign === "Minus") {
        previousValue -= parseFloat(getCurrentValue());
        addValue(previousValue);
    }
    if(sign === "Divide") {
        if (previousValue !== 0) {
            previousValue /= parseFloat(getCurrentValue());
            addValue(previousValue);
        }         
    }
    if(sign === "Equal")
        equal();

    setPreviousSign(sign);
}

function keyPressed(key) {
    if(typeof(key) === 'number')
        appendNumber(key);
    else
        addSign(key);
}
