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
    if(b==0){return "Cant divide with 0 !!!";}
    else {return a/b;}
}
let first;
let second;
let operator;
function operate(a,b,sign){
    if(sign== '+'){add(a,b);}
    else if(sign=='-'){subtract(a,b);}
    else if(sign=='*'){multiply(a,b);}
    else if(sign=='/'){divide(a,b);}
}
