let display = document.getElementById("display");
let answer = document.getElementById("answer");

let buttons = document.querySelectorAll(".keyarea button")


let prefix = "", operator = "", suffix = "";

buttons.forEach(btn => {
    btn.addEventListener("click", () =>{
        let value = btn.innerText; //for each button yesle chai click huda tyo button bhitra ko text chai value ma layera rakhya xa
        console.log(value); //check garna 

        switch(value){

            case "C" : //sab khali
                prefix = "";
                operator = "";
                suffix = "";
                display.innerText = "";
                answer.innerText = "";
                break;

            case "→" :
                if (suffix){
                    suffix = suffix.slice(0,-1) //yesle last digit lai hatauxa
                }
                else if(operator){
                    operator = ""; //operator euta matra hunxa so khali banaidine
                }
                else{
                    prefix = prefix.slice(0,-1); //tei suffix wala
                }

                display.innerText = prefix + operator + suffix;
                break;

            case '+':
            case '-':
            case 'x':
            case '/':
            case '%':
                if(prefix !== ""){
                    operator = value; //yesle chai yedi operator vanda aghi khali xaina vane tyo click bhako value lai chai operator bana vanxa
                }
                display.innerText = prefix + operator;
                break;

            case '=':
                let a;
                let b;
                let result;

                a = parseFloat(prefix);
                b = parseFloat(suffix);

                switch(operator){

                    case '+': result = a+b; break;
                    case '-': result = a-b; break;
                    case 'x': result = a*b; break;
                    case '/': result = a/b; break;
                    case '%': result = parseFloat(display.innerText)/100; break;
                    default: result = "Error";
                }

                answer.innerText = result;
                break;

            default:
                if (!operator) {
                    prefix += value; 
                } else {
                    suffix += value;
                }
                display.innerText = prefix + operator + suffix;
                //yo default line ma aayesi balla display vairxa
                //operator nahuda chai prefix nai vairaxa
                //operator huda chai suffix banxa operator paxi ko line
        }
    })
});