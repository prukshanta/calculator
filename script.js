console.log("JS Connected");

let display = document.getElementById("display");
let answer = document.getElementById("answer");
let buttons = document.querySelectorAll(".keyarea button");

let firstNum = "";
let secondNum = "";
let operator = "";
let lastOperator = "";
let lastsecondNum = "";

buttons.forEach(function(btn){
    btn.onclick = function(){
        let value = btn.innerText;
        console.log(`${value}`)

        switch(value){
            case 'C':
               firstNum = "";
               secondNum = "";
               operator = "";
               display.innerText = "";
               answer.innerText = "";
               break;
            
            case '→':
                if(secondNum){
                    secondNum = secondNum.slice(0,-1);
                }
                else if(operator){
                    operator = "";
                }
                else{
                    firstNum = firstNum.slice(0,-1);
                }
                display.innerText = firstNum + operator + secondNum;
                break;

            case '+':
            case '-':
            case '*':
            case '/':
            case '%':
                if (firstNum !== ""){
                    operator = value;
                    display.innerText = firstNum + operator;
                }
                break;

            case '=':
                let a;
                let b;
                let result;

                if(secondNum === "" && lastsecondNum !== ""){
                    a = parseFloat(firstNum);
                    b = parseFloat(lastsecondNum);
                    operator = lastOperator;
                }

                else{
                    a = parseFloat(firstNum);
                    b = parseFloat(secondNum);
                    lastsecondNum = secondNum;   
                    lastOperator = operator;
                }

                switch(operator){

                    case '+':
                        result = a + b;
                        break;
                     case '-':
                        result = a - b;
                        break;
                     case 'x':
                        result = a * b;
                        break;
                     case '+':
                        result = a / b;
                        break;
                     case '%':
                        result = a/100;
                        break;
                    default: result = "Error";
                }

                answer.innerText = result;
                firstNum = result.toString();
                break;

            default:
                if (!operator){
                    firstNum += value;
                }
                else {
                    secondNum += value;
                }

                display.innerText = firstNum + operator + secondNum;

                }

        }
    }
)
