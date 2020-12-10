var sobre1 = document.querySelector("#subtopic28")
var sobre2 = document.querySelector("#subtopic29")
var sobre3 = document.querySelector("#subtopic30")
var oculto = true
var sobremadlions = document.querySelector("#sobremadlions")
var linemadlions = document.querySelector("#linemadlions")
var titulomadlions = document.querySelector("#titulomadlions")

sobre1.onclick = function() {
    if (oculto == true){
        sobremadlions.style.display = "block";
        oculto = false;
    }
    else {
        sobremadlions.style.display = "none";
        oculto = true;
    }
    
    }

sobre2.onclick = function() {
    if (oculto == true){
        linemadlions.style.display = "block";
        oculto = false;
    }
    else {
        linemadlions.style.display = "none";
        oculto = true;
    }
    
    }

sobre3.onclick = function() {
    if (oculto == true){
        titulomadlions.style.display = "block";
        oculto = false;
    }
    else {
        titulomadlions.style.display = "none";
        oculto = true;
    }
    
    }  

