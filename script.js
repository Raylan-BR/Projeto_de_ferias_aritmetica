var menu = document.querySelector(".aritmetica");
var operation = document.querySelector(".content-operation");
var title = document.querySelector("h2");
var sinal = document.querySelector(".sinal");
var n1_display = document.querySelector(".number1");
var n2_display = document.querySelector(".number2");
var answer_input = document.querySelector(".resposta");
var numero1,numero2,answer,score = 0;
var solution = document.querySelector(".solution");
var score_display = document.querySelectorAll("#score");

var back_menu = document.querySelector(".back");
var add_btn = document.querySelector(".addition");
var sub_btn = document.querySelector(".subtraction");
var mul_btn = document.querySelector(".multiplication");
var div_btn = document.querySelector(".division");
var btn_verify = document.querySelector(".verify");

answer_input.value = null;
score_display[0] = score;
score_display[1] = score;
var delay_request = 9;
//back-menu
back_menu.onclick = function(){
    operation.style.display = "none";
    menu.style.display = "flex";
    title.innerText = "Jogo de aritmética";
    answer_input.value = null;
    solution.style.display = 'none';
    reload();
}
//operation addition
add_btn.onclick = function(){
    delay_request = 9;
    operation.style.display = "flex";
    menu.style.display = "none";
    title.innerText = "Adição";
    sinal.innerText = "+";
    contar();

    numero1 = Math.ceil(Math.random()*10);
    numero2 = Math.ceil(Math.random()*10);
    answer = numero1+numero2;

    n1_display.innerText = numero1;
    n2_display.innerText = numero2;
}
//operation subtraction
sub_btn.onclick = function(){
    delay_request = 15;
    operation.style.display = "flex";
    menu.style.display = "none";
    title.innerText = "Subtração";
    sinal.innerText = "-";
    contar();

    numero1 = Math.ceil(Math.random()*10);
    numero2 = Math.ceil(Math.random()*10);
    answer = numero1-numero2;

    n1_display.innerText = numero1;
    n2_display.innerText = numero2;
}
//operation multiplication
mul_btn.onclick = function(){
    delay_request = 15;
    operation.style.display = "flex";
    menu.style.display = "none";
    title.innerText = "Multiplicação";
    sinal.innerText = "x";
    contar();

    numero1 = Math.ceil(Math.random()*10);
    numero2 = Math.ceil(Math.random()*10);
    answer = numero1*numero2;

    n1_display.innerText = numero1;
    n2_display.innerText = numero2;
}
//operation division
div_btn.onclick = function(){
    operation.style.display = "flex";
    menu.style.display = "none";
    title.innerText = "Divisão";
    sinal.innerText = "/";

    numero1 = Math.ceil(Math.random()*10);
    numero2 = Math.ceil(Math.random()*10);
    answer = (numero1/numero2).toFixed(1);

    n1_display.innerText = numero1;
    n2_display.innerText = numero2;
}
//verify
btn_verify.onclick = function(){
    if(answer == answer_input.value){
        solution.innerText = `correto: ${n1_display.innerText} ${sinal.innerText} ${n2_display.innerText} = ${answer}`;
        solution.style.display = 'block';
        solution.style.color = "#499c70";
        score = score+1;
        score_display[0].innerText = score;
        score_display[1].innerText = score;
    
    }
    else{
        solution.innerText = `errado: ${n1_display.innerText} ${sinal.innerText} ${n2_display.innerText} = ${answer}`;
        solution.style.display = 'block';
        solution.style.color = "#f44e3f";
    }

    numero1 = Math.ceil(Math.random()*10);
    numero2 = Math.ceil(Math.random()*10);

    n1_display.innerText = numero1;
    n2_display.innerText = numero2;

    switch(sinal.innerText){
        case "+":
            answer = numero1+numero2;
            break;
        case "x":
            answer = numero1*numero2;
            break;
        case "-":
            answer = numero1-numero2;
            break;
        case "/":
            answer = (numero1/numero2).toFixed(1);
            break;
    }
    if(sinal.innerText != '/'){
        reload();
        contar();
    }
}
document.addEventListener("keypress",function(e){
    if(e.key === 'Enter'){
        btn_verify.onclick();
        answer_input.value = null;
        if(sinal.innerText != '/'){
            reload();
            contar();
        }
    }
});

//temporizador-----------------------------------------------

function reload_request(){
    numero1 = Math.ceil(Math.random()*10);
    numero2 = Math.ceil(Math.random()*10);

    n1_display.innerText = numero1;
    n2_display.innerText = numero2;

    solution.style.display = 'none';
    switch(sinal.innerText){
        case "+":
            answer = numero1+numero2;
            break;
        case "x":
            answer = numero1*numero2;
            break;
        case "-":
            answer = numero1-numero2;
            break;
        case "/":
            answer = Math.ceil(numero1/numero2).toFixed(2);
            break;
    }
}

var intervalo;
var tempo_display = document.querySelector(".time");
var tempo;
function contar(){
    tempo = delay_request;
    intervalo = setInterval(()=>{
        if(tempo < 10){
            tempo_display.innerText = `0${tempo}`;
        }
        else {
            tempo_display.innerText = tempo;
        }
    tempo--;
    if(tempo < 0){
      reload_request();
      tempo = delay_request;
    }
  }, 200);
}
function reload(){
  clearInterval(intervalo);
  tempo = delay_request;
  tempo_display.innerText = tempo;
}
