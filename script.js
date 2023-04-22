let display=document.querySelector(".display");
let button=document.querySelectorAll(".button");

Array.from(button).forEach((btn)=> {
    btn.addEventListener("click",()=>{
        if(btn.innerHTML==='AC') display.innerHTML='0';
        else if(btn.innerHTML==='+/-') {
            if(display.innerHTML>'0') display.innerHTML='-'+display.innerHTML;
            else if(display.innerHTML<'0') display.innerHTML=display.innerHTML.slice(1);
        }
        else if(btn.innerHTML==='X'){
            // output.innerHTML+='X';
            display.innerHTML+='*';
            display.innerHTML=eval(display.innerHTML);
        }
        else if(btn.innerHTML==='='){
            display.innerHTML=eval(display.innerHTML);
        }

        else if(btn.innerHTML==='%'){
            display.innerHTML=eval(display.innerHTML)/100;
        }
        else{
            if(display.innerHTML==='0') display.innerHTML=btn.innerHTML;
            else display.innerHTML+=btn.innerHTML;
        }
    });
});