
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
    if(isFirstEntry) {
        addValue("0.");
        isFirstEntry = false;
    }
}
function equal() {
    var result = 0;
    if(previousSign === "Plus")
        result = previousValue += parseFloat(getCurrentValue());
    if(previousSign === "By")
        result = previousValue *= parseFloat(getCurrentValue());
    if(previousSign === "Minus")
        result = previousValue -= parseFloat(getCurrentValue());
    if(previousSign === "Divide")
        result = previousValue /= parseFloat(getCurrentValue());
    addValue(result);
    previousSign = "none";
    previousValue = 0;
    isFirstEntry = true;
}
function resolve() {
    addValue(previousValue);

}
function setPreviousNumber() {
    previousValue = parseFloat(getCurrentValue());
    isFirstEntry = true;
}
function setPreviousSign(sign) {
    if(sign === "Dot" || sign === "CE" || sign === "C" || sign === "Equal") {
        if(previousSign !== "none")
            sign = previousSign;
        else
            sign = "none";
    }        
    else 
        setPreviousNumber();
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
        if (previousValue !== 0) {
            previousValue -= parseFloat(getCurrentValue());
            addValue(previousValue);
        }        
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
