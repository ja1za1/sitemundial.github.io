var sobre1 = document.querySelector("#subtopic43")
var sobre2 = document.querySelector("#subtopic44")
var sobre3 = document.querySelector("#subtopic45")
var oculto = true
var sobrejdg = document.querySelector("#sobrejdg")
var linejdg = document.querySelector("#linejdg")
var titulojdg = document.querySelector("#titulojdg")

sobre1.onclick = function() {
    if (oculto == true){
        sobrejdg.style.display = "block";
        oculto = false;
    }
    else {
        sobrejdg.style.display = "none";
        oculto = true;
    }
    
    }

sobre2.onclick = function() {
    if (oculto == true){
        linejdg.style.display = "block";
        oculto = false;
    }
    else {
        linejdg.style.display = "none";
        oculto = true;
    }
    
    }

sobre3.onclick = function() {
    if (oculto == true){
        titulojdg.style.display = "block";
        oculto = false;
    }
    else {
        titulojdg.style.display = "none";
        oculto = true;
    }
    
    }  

