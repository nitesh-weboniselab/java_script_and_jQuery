// Nitesh Wadekar

function displaynum(key) {

document.getElementById("cal").value= document.getElementById("cal").value + key ;
}

function operator(operator) {         
oper = operator
 num= document.getElementById("cal").value;
document.getElementById("cal").value = " "
}

function equalto() {


CalResult(num ,document.getElementById("cal").value,oper);
}

function CalResult(operandone,operand2,operator)
 {
    if (operator== "+" ) 
     document.getElementById("cal").value = operandone+operand2;
   else if ( operator == "-" )
     document.getElementById("cal").value = operandone-operand2;
   else if (operator == "*")
     document.getElementById("cal").value = operandone*operand2;
   else if (operator =="/")
      document.getElementById("cal").value = operandone/operand2;
    else if (operator =="%")
      document.getElementById("cal").value = operandone%operand2;
}
function clearDisplay()
 {
    document.getElementById("cal").value=" ";
     
 }
function mathFunction(sign)
 {
   if(sign="sin")
      {  num= document.getElementById("cal").value;
        document.getElementById("cal").value=Math.sin(num);
      }
   if(sign="cos")
      {  num= document.getElementById("cal").value;
        document.getElementById("cal").value=Math.cos(num);
      }

  if(sign="tan")
      {  num= document.getElementById("cal").value;
        document.getElementById("cal").value=Math.tan(num);
      }
  }






