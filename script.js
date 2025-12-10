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
    else {return Math.round((a/b) * 100000) / 100000;}
}
function reminder(a,b){
    if(b===0){return "Cant divide with 0 !!!";}
    else {return a%b;}
}
let first= null;
let second= null;
let operator= null;
let wait=false;

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
        case '%' :
            return reminder(a,b);
        default:
            return b;
    }
}
function handleDelete() {
    let current = display.textContent.trim();
    
    if (current === '' || current === '0') {
        display.textContent = '0';
        first = null;
        operator = null;
        wait = false;
        return;
    }
    
    let lastChar = current.slice(-1);
    
    // If last character is operator, remove it and clear operator state
    if (['+', '-', '*', '/', '%'].includes(lastChar)) {
        operator = null;
        wait = false;
        display.textContent = current.slice(0, -1).trim();
        const operands=document.querySelectorAll('.opp');
        operands.forEach((button)=>{button.classList.remove('active');})
    }
    // If last character is space (before operator), remove operator and space
    else if (lastChar === ' ') {
        // Check if there's an operator before the space
        let parts = current.split(' ');
        if (parts.length > 1 && ['+', '-', '*', '/', '%'].includes(parts[parts.length - 2])) {
            operator = null;
            wait = false;
            display.textContent = parts.slice(0, -2).join(' ');
            const operands=document.querySelectorAll('.opp');
        operands.forEach((button)=>{button.classList.remove('active');})
        }
        }
    // Otherwise delete last character of number
    else {
        display.textContent = current.slice(0, -1);
    }
    
    // Reset to 0 if empty
    if (display.textContent === '') {
        display.textContent = '0';
        first = null;
        operator = null;
        wait = false;
    }
}
// Manages number input. 
function populateN(someValue){
    if(someValue=== '.'){
        if(display.textContent.includes('.')){
            return;
        }
        display.textContent=display.textContent === '0' ? someValue : display.textContent + someValue;
        return;
    }
   if(wait){
    display.textContent=someValue;
    wait=false;
   } else {
    display.textContent=display.textContent === '0' ? someValue : display.textContent + someValue;
   }
}
// Manages operator input.
function populateO(someValue){
   const inputVal=parseFloat(display.textContent);
   if(operator && wait){
    operator=someValue;
     display.textContent = display.textContent.slice(0, -1) + someValue;
    return;
   }
   if(first===null){
    first=inputVal;
   } else if(operator){
    const result=operate(first,inputVal,operator);
    display.textContent=String(result);
    first=result;
   }

   display.textContent = display.textContent + ' ' + someValue;

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
        const operands=document.querySelectorAll('.opp');
        operands.forEach((button)=>{button.classList.remove('active');})

    });
});
const operands=document.querySelectorAll('.opp');
operands.forEach((button)=>{
    button.addEventListener('click',()=>{
        button.classList.add('active');
        
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
    const operands=document.querySelectorAll('.opp');
        operands.forEach((button)=>{button.classList.remove('active');})


}
const del=document.getElementById('del');
del.addEventListener('click',()=>{
    handleDelete();
})