/***********DOM element***********/
const leftTerm = document.getElementById("leftTerm");
const rightTerm = document.getElementById("rightTerm");
const equal = document.getElementById("equal");
const outputResult = document.getElementById("outputResult");
/***********[END]***********/

/***********variable declaration***********/
let operatorValue;
let result;
const operatorElement = document.getElementById("operators");
let checkedElement;
/***********[END]variable declaration***********/

/***********event handler***********/
//equalButtonを押したときのイベントハンドラ
equal.addEventListener("click", () => {
    
    for(i=0;i<operatorElement.length;i++) {
        if(operatorElement[i].selected) {
            checkedElement = operatorElement[i].value;
            break;
        }
    }

    if(checkedElement === "+") {
        result = leftTerm.valueAsNumber + rightTerm.valueAsNumber;
    } else if(checkedElement === "-") {
        result = leftTerm.valueAsNumber - rightTerm.valueAsNumber;
    } else if(checkedElement === "*") {
        result = leftTerm.valueAsNumber * rightTerm.valueAsNumber;
    } else if(checkedElement === "/") {
        result = leftTerm.valueAsNumber / rightTerm.valueAsNumber;
    } else {
        result = "error";
    }

    console.log(result);
    outputResult.innerHTML = result;
})
/***********[END]prototype　initialized***********/

/*main code*/

/*[END]main code*/