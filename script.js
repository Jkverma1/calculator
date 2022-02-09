function clearScreen() {
    document.getElementById("result").value = "";
   }

function display(value) {
    document.getElementById("result").value += value;
}

function status(){
    var p = document.getElementById("result").value;
    var q = eval(p);
    q = q*(-1)
    document.getElementById("result").value = q;
}

function remove(){
    var bsp = document.getElementById("result").value;
    document.getElementById("result").value=bsp.substring(0,bsp.length -1);
}

function mode(){
    if(value == 0){
    document.getElementById("mode").value = "Night";
    var calculator = document.querySelector(".calculator");
    calculator.style.backgroundColor = "#383838";
    var displayBox = document.querySelector(".display-box");
    displayBox.style.backgroundColor = "#1f1f1f";
    displayBox.style.color = "white";
    value = 1;
    }
    else 
    {   document.getElementById("mode").value = "Day";
        var calculator = document.querySelector(".calculator");
        calculator.style.backgroundColor = "white";
        var displayBox = document.querySelector(".display-box");
        displayBox.style.backgroundColor = "white";
        displayBox.style.color = "black";
        value = 0;
    }
}


function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}




// This function clear all the values
function clearScreen() {
    document.getElementById("result").value = "";
   }
   
   // This function display values
   function display(value) {
    document.getElementById("result").value += value;
   }
   // This function evaluates the expression and return result
   function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
   }