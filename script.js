function add(a,b){
    return a+b;
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
let first;
let second;
let operator;
let currentNum=0;
let count=0;
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
            return "Invalid Operator!";
    }
}
function populateN(someValue){
    if(isNaN(currentNum) || currentNum==0){ 
       display.textContent+=`  ${someValue}`;
       currentNum=someValue;
       if(count==0){first=someValue;}
       else{second=someValue;}
       count++;
    }
    else{
        alert('Please enter the operand first !!!');
    }
}
function populateO(someValue){
    if(!isNaN( currentNum)){ 
       display.textContent+=`  ${someValue}`;
       currentNum=someValue;
       operator=someValue;
    }
    else{
        alert('Please enter the number first!!!');
    }
}
function equals(){
    const ans=operate(first,second,operator);
    display.textContent+=ans;
    currentNum=0;
    count=0;
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
}