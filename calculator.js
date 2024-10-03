
let display = document.getElementById("display") ;
let buttons = document.getElementsByClassName("btn") ;
let equal = document.getElementById("equal") ;
let ac = document.getElementById("ac") ;
let c = document.getElementById("c") ;


let operatorsArr  = ["+", "-", "*", "/", "%"] ;
for (let btn of buttons) {
    btn.onclick = function() {
        let currentDisplay = display.value ;
        let btnValue = btn.value ;
        // let lastChar = display.value.charAt(display.value.length - 1)
        let lastChar = currentDisplay.charAt(currentDisplay.length - 1) ;

        // store true or false according to btnValue 
        let currentOperator = operatorsArr.includes(btnValue) ;

        if ( (currentDisplay === "0" &&  btnValue !== "." )){

            if( !currentOperator || btnValue === "-" ){
                display.value = btn.value;
            }

        } else {
            
            // if operator is used 
            if( currentOperator ){

                if( ! operatorsArr.includes(lastChar) ){
                    display.value += btn.value; 
                }

            } 
            // when btnValue is not contain any operator
            else{

                if(display.value.charAt(display.value.length - 1) !=="." || btn.value !=="."){

                    display.value += btn.value;
                }

            }
        }
    }
}

// evaluating equation 
equal.onclick=function(){
    display.value = eval(display.value) ;
}

// clear button 
c.onclick= function(){
    if( display.value.slice(0,-1) ){    //  if display has one element
        display.value = display.value.slice(0,-1) ;
    }
}

// all clear button 
ac.onclick = function(){
    display.value = "0" ;
}

























