function add(a,b){
    let newa=parseInt(a);
    let newb=parseInt(b);
    return (newa+newb);
}
function subtract(a,b){
    return a-b;
}
function multiply(a,b){
   return  a*b;
}
function divide(a,b){
    if(b===0){return "Cant divide with 0 !!!";}
    else {return a/b;}
}
let first= null;
let second= null;
let operator= null;
let wait=false;
//let currentNum=0;
//let count=0;
const display=document.getElementById('display');
function operate(a,b,sign){
    switch(sign){
        case '+' :
            return add(a,b);
        case '-' :
            return subtract(a,b);
        case '*' :
            return multiply(a,b);
        case '/' :
            return divide(a,b);
        default:
            return b;
    }
}
function populateN(someValue){
   if(wait){
    display.textContent=someValue;
    wait=false;
   } else {
    display.textContent=display.textContent === '0' ? someValue : display.textContent + someValue;
   }
}
function populateO(someValue){
   const inputVal=parseFloat(display.textContent);
   if(operator && wait){
    operator=someValue;
    return;
   }
   if(first===null){
    first=inputVal;
   } else if(operator){
    const result=operate(first,inputVal,operator);
    display.textContent=String(result);
    first=result;
   }
   wait=true;
   operator=someValue;
}
function equals(){
   if(!operator || wait) return;
   const inputValue=parseFloat(display.textContent);
   const result=operate(first,inputValue,operator);
   display.textContent=String(result);
    first=null;
    second=null;
    operator=null;
    wait=false;
}
const buttons =document.querySelectorAll('.num');
buttons.forEach((button)=>{
    button.addEventListener('click',()=>{
        populateN(button.textContent);
    });
});
const operands=document.querySelectorAll('.opp');
operands.forEach((button)=>{
    button.addEventListener('click',()=>{
        populateO(button.textContent);
    });
});
document.getElementById('equals').onclick=equals;
function handles(){
    display.textContent='';
    first=null;
    second=null;
    operator=null;
    wait=false;
}