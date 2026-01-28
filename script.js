console.log("JS Connected");

function updateDisplay(value) {
  const display = document.getElementById("display");
  display.innerText = value;

  // Scroll to far right (latest digits)
  display.scrollLeft = display.scrollWidth;
}





let display = document.getElementById("display");
let answer = document.getElementById("answer");
let buttons = document.querySelectorAll(".keyarea button");

let firstNum = "";
let secondNum = "";
let operator = "";
let lastOperator = "";
let lastsecondNum = "";
let justCalculated = false;


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
                updateDisplay(firstNum + operator + secondNum);

                break;

            case '+':
            case '-':
            case 'x':
            case '/':
            case '%':
                if (firstNum !== ""){
                    operator = value;
                   updateDisplay(firstNum + operator);

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
                     case '/':
                        result = a / b;
                        break;
                     case '%':
                        result = a/100;
                        break;
                    default: result = "Error";
                }

                answer.innerText = result;
                firstNum = result.toString();
                justCalculated = true;
                break;

            default:
                // If user starts typing after result, reset
                if (justCalculated) {
                firstNum = value;
                justCalculated = false;
                }
                else if (!operator) {
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



let isDown = false;
let startX;
let scrollLeft;

display.addEventListener("mousedown", (e) => {
  isDown = true;
  display.classList.add("active");
  startX = e.pageX - display.offsetLeft;
  scrollLeft = display.scrollLeft;
});

display.addEventListener("mouseleave", () => {
  isDown = false;
});

display.addEventListener("mouseup", () => {
  isDown = false;
});

display.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - display.offsetLeft;
  const walk = (x - startX) * 2; // scroll speed
  display.scrollLeft = scrollLeft - walk;
});
