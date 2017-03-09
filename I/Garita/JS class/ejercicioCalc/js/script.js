
var previousValue = 0;
var previousSign = "none";
function getCurrentValue() {
    return document.getElementById("numberDisplay").value;
}
function addValue(value) {
    document.getElementById("numberDisplay").value = value;    
}

function addNumber(number) {
    var currentValue = getCurrentValue();
    var newValue;
    if(currentValue[0] === "0" && currentValue[1] !== ".") {
        for(var i = 1; i < currentValue.length; i++)
            newValue += currentValue[i];
        (typeof(newValue) === 'undefined') ? newValue = "" : newValue;
        currentValue = newValue;
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
function resolve() {
    
}

function addSign(sign) {
    if(sign === "Dot")
        addDot();
    if(sign === "C")
        addValue("0");
    if(sign === "CE") {
        previousValue = 0;
        addValue("0");
    }
    if(sign === "Plus") {
        previousValue += parseInt(getCurrentValue());
        addValue("0");        
    }
    if(sign === "By")
        previousValue *= parseInt(getCurrentValue());
        addValue("0");
    if(sign === "Minus")
        previousValue -= parseInt(getCurrentValue());
        addValue("0");
    if(sign === "Divide")
        previousValue /= parseInt(getCurrentValue());
        addValue("0");
    if(sign === "Equal")
        var result = 
}

function keyPressed(key) {
    if(typeof(key) === 'number')
        addNumber(key);
    else
        addSign(key);
}
