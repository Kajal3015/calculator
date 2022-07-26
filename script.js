let number=document.querySelectorAll(".count");
let clear= document.getElementById("clear");
let result= document.querySelector(".result");
let input=document.querySelector(".input");
let operator=document.querySelectorAll(".operator");
let display=false;


for(let i=0;i<number.length-1;i++){
    number[i].addEventListener("click",function(e){
        if(display==false){
            input.innerHTML+=e.target.textContent;
        }else{
            input.innerHTML="";
            input.innerHTML+=e.target.textContent;
            display=false;
        }
    })
}


for(let i=0;i<operator.length;i++){
    operator[i].addEventListener("click",function(e){
        display=false;
        let currInput=input.innerHTML;
        let lastChar=currInput[currInput.length-1];
        // console.log(lastChar);
        if(lastChar=='+' || lastChar=='-' || lastChar=='*' || lastChar=='/'){
            var newInput=currInput.substring(0,currInput.length-1)+e.target.innerHTML;
            input.innerHTML="";
            // console.log(newInput);
            input.innerHTML=newInput;
        }else if(currInput.includes('+')  || currInput.includes('-') || currInput.includes('*') || currInput.includes('/')){
            compute(currInput);
            input.innerHTML+=e.target.textContent;
        }else{
            input.innerHTML+=e.target.textContent;
        }
       
    })
}

result.addEventListener("click",function(){
    display=true;
    let currInput=input.innerHTML;
    let lastChar=currInput[currInput.length-1];
    if(lastChar=='+' || lastChar=='-' || lastChar=='*' || lastChar=='/'){
        alert("Please Enter Valid Expression");
    }else if(currInput.includes('+')  || currInput.includes('-') || currInput.includes('*') || currInput.includes('/')){
        compute(currInput);
    }else{
        alert("Please Enter Valid Expression");
    }
})

clear.addEventListener("click",function(){
    input.innerHTML="";
})

function compute(currInput){
    const numbers = currInput.split(/\D/g);
    let num1=parseInt(numbers[9]);
    let num2=parseInt(numbers[10]);
    if(isNaN(num1)){
        num1=parseInt(numbers[0]);
        num2=parseInt(numbers[1]);
    }
    console.log(num1);

    console.log(numbers);
    // console.log(op);
    if(currInput.includes('+')){
        var ans= num1+num2;
    }else if(currInput.includes('-')){
        var ans= num1-num2;
    }else if(currInput.includes('*')){
        var ans= num1*num2;
    }else{
        var ans= num1/num2;
    }
    input.innerHTML=String(ans);
}
