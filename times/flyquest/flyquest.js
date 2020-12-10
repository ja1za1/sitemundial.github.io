var sobre1 = document.querySelector("#subtopic52")
var sobre2 = document.querySelector("#subtopic53")
var sobre3 = document.querySelector("#subtopic54")
var oculto = true
var sobreflyquest = document.querySelector("#sobreflyquest")
var lineflyquest = document.querySelector("#lineflyquest")
var tituloflyquest = document.querySelector("#tituloflyquest")

sobre1.onclick = function() {
    if (oculto == true){
        sobreflyquest.style.display = "block";
        oculto = false;
    }
    else {
        sobreflyquest.style.display = "none";
        oculto = true;
    }
    
    }

sobre2.onclick = function() {
    if (oculto == true){
        lineflyquest.style.display = "block";
        oculto = false;
    }
    else {
        lineflyquest.style.display = "none";
        oculto = true;
    }
    
    }

sobre3.onclick = function() {
    if (oculto == true){
        tituloflyquest.style.display = "block";
        oculto = false;
    }
    else {
        tituloflyquest.style.display = "none";
        oculto = true;
    }
    
    }  

