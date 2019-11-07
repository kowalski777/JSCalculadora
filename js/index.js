var calculadora = {
    cero: document.getElementById("0"),
    uno: document.getElementById("1"),
    dos: document.getElementById("2"),
    tres: document.getElementById("3"),
    cuatro: document.getElementById("4"),
    cinco: document.getElementById("5"),
    seis: document.getElementById("6"),
    siete: document.getElementById("7"),
    ocho: document.getElementById("8"),
    nueve: document.getElementById("9"),
   
    suma: document.getElementById("mas"),
    resta: document.getElementById("menos"),
    multi: document.getElementById("por"),
    divide: document.getElementById("dividido"),
    raiz: document.getElementById("raiz"),
    igual: document.getElementById("igual"),
    punto: document.getElementById("punto"),
    on: document.getElementById("on"),
    signo: document.getElementById("sign"),
}

var pantalla = document.getElementById("display");


calculadora.cero.addEventListener("click",function(){
if (pantalla.textContent.length < 8){
    if (pantalla.textContent =="0"){
        pantalla.textContent = pantalla.textContent;
    }
else{pantalla.textContent+="0";}
 
}
})
calculadora.uno.addEventListener("click",function(){
if (pantalla.textContent.length < 8){
    if(pantalla.textContent == "0"){
        pantalla.textContent= "";
        pantalla.innerHTML="1";
    }else{pantalla.textContent+="1";}
}
})
calculadora.dos.addEventListener("click",function(){
if (pantalla.textContent.length < 8){
    if(pantalla.textContent == "0"){
        pantalla.textContent= "";
        pantalla.innerHTML="2";
    }else{pantalla.textContent+="2";}
}
})
calculadora.tres.addEventListener("click",function(){
if (pantalla.textContent.length < 8){
    if(pantalla.textContent == "0"){
        pantalla.textContent= "";
        pantalla.innerHTML="3";
    }else{pantalla.textContent+="3";}
}
})
calculadora.cuatro.addEventListener("click",function(){
if (pantalla.textContent.length < 8){
    if(pantalla.textContent == "0"){
        pantalla.textContent= "";
        pantalla.innerHTML="4";
    }else{pantalla.textContent+="4";}
}
})
calculadora.cinco.addEventListener("click",function(){
if (pantalla.textContent.length < 8){
    if(pantalla.textContent == "0"){
        pantalla.textContent= "";
        pantalla.innerHTML="5";
    }else{pantalla.textContent+="5";}
}
})
calculadora.seis.addEventListener("click",function(){
if (pantalla.textContent.length < 8){
    if(pantalla.textContent == "0"){
        pantalla.textContent= "";
        pantalla.innerHTML="6";
    }else{pantalla.textContent+="6";}
}
})
calculadora.siete.addEventListener("click",function(){
if (pantalla.textContent.length < 8){
    if(pantalla.textContent == "0"){
        pantalla.textContent= "";
        pantalla.innerHTML="7";
    }else{pantalla.textContent+="7";}
}
})
calculadora.ocho.addEventListener("click",function(){
if (pantalla.textContent.length < 8){
    if(pantalla.textContent == "0"){
        pantalla.textContent= "";
        pantalla.innerHTML="8";
    }else{pantalla.textContent+="8";}
}
})
calculadora.nueve.addEventListener("click",function(){
if (pantalla.textContent.length < 8){
    if(pantalla.textContent == "0"){
        pantalla.textContent= "";
        pantalla.innerHTML="9";
    }else{pantalla.textContent+="9";}
}
})

calculadora.on.addEventListener("click",function(){
pantalla.textContent = "";    
pantalla.innerHTML = "0";
})


calculadora.punto.addEventListener("click",function(){
if(pantalla.textContent == "0"){
    pantalla.textContent = pantalla.textContent +".";
}
else if ((pantalla.textContent !== "0") && (pantalla.textContent.indexOf(".") == "-1")){
    pantalla.textContent = pantalla.textContent +".";
}
else if ((pantalla.textContent !== "0") && (pantalla.textContent.indexOf(".") !== "-1")){
    pantalla.textContent = pantalla.textContent;
}
else if(pantalla.textContent == ""){
    pantalla.textContent = pantalla.textContent;
}
})




//----------------------------------------------------------------------
var v1, v2;
calculadora.suma.addEventListener("click",function(){
v1 = pantalla.textContent;
operador = "sumarNumero";
vaciar();
})

calculadora.resta.addEventListener("click",function(){
v1 = pantalla.textContent;
operador = "restarNumero";
vaciar();
})

calculadora.multi.addEventListener("click",function(){
v1 = pantalla.textContent;
operador = "multiplicarNumero";
vaciar();
})

calculadora.divide.addEventListener("click",function(){
v1 = pantalla.textContent;
operador = "dividirNumero";
vaciar();
})

calculadora.raiz.addEventListener("click",function(){
v1 = pantalla.textContent;
pantalla.textContent = Math.sqrt(parseFloat(v1));
pantalla.innerHTML= String(pantalla.textContent).substr(0,8);
})

calculadora.signo.addEventListener("click",function(){
    if (pantalla.textContent !== "0"){
pantalla.textContent = parseFloat(pantalla.textContent) * -1;}
})
//-------------------------------------------------------------------------


calculadora.igual.addEventListener("click", function() {
v2 = pantalla.textContent;
switch (operador) {
case 'sumarNumero':
sumar();
break;
case 'restarNumero':
restar();
break;
case 'multiplicarNumero':
multiplicar();
break;
case 'dividirNumero':
dividir();
break;
}
})

function sumar(){
   pantalla.textContent = parseFloat(v1) + parseFloat(v2);
   pantalla.innerHTML= String(pantalla.textContent).substr(0,8);
}
function restar(){
   pantalla.textContent = parseFloat(v1) - parseFloat(v2);
   pantalla.innerHTML= String(pantalla.textContent).substr(0,8);
}
function multiplicar(){
   pantalla.textContent = parseFloat(v1) * parseFloat(v2);
   pantalla.innerHTML= String(pantalla.textContent).substr(0,8);
   
}
function dividir(){
   pantalla.textContent = parseFloat(v1) / parseFloat(v2);
   pantalla.innerHTML= String(pantalla.textContent).substr(0,8);
}

function vaciar(){
  pantalla.innerHTML = '';
}

var botones = document.getElementsByClassName("tecla");
for (let i = 0; i < botones.length; i++) {
botones[i].addEventListener("mousedown", function () {
botones[i].style.transform = "scale(.95, .95)";
});
botones[i].addEventListener("mouseup", function () {
botones[i].setAttribute("style", "transform:scale(1, 1)");
});
};


/*
var largo = pantalla.textContent.length;
  for (var i = 0; i < largo; i++) {
    if i[0] = "0"{
        pantalla.textContent= pantalla.textContent + 1;
       
    }
}*/
