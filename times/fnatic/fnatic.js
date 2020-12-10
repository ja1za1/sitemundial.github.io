var sobre1 = document.querySelector("#subtopic46")
var sobre2 = document.querySelector("#subtopic47")
var sobre3 = document.querySelector("#subtopic48")
var oculto = true
var sobrefnatic = document.querySelector("#sobrefnatic")
var linefnatic = document.querySelector("#linefnatic")
var titulofnatic = document.querySelector("#titulofnatic")

sobre1.onclick = function() {
    if (oculto == true){
        sobrefnatic.style.display = "block";
        oculto = false;
    }
    else {
        sobrefnatic.style.display = "none";
        oculto = true;
    }
    
    }

sobre2.onclick = function() {
    if (oculto == true){
        linefnatic.style.display = "block";
        oculto = false;
    }
    else {
        linefnatic.style.display = "none";
        oculto = true;
    }
    
    }

sobre3.onclick = function() {
    if (oculto == true){
        titulofnatic.style.display = "block";
        oculto = false;
    }
    else {
        titulofnatic.style.display = "none";
        oculto = true;
    }
    
    }  

