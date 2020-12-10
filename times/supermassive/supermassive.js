var sobre1 = document.querySelector("#subtopic16")
var sobre2 = document.querySelector("#subtopic17")
var sobre3 = document.querySelector("#subtopic18")
var oculto = true
var sobresupermassive = document.querySelector("#sobresupermassive")
var linesupermassive = document.querySelector("#linesupermassive")
var titulosupermassive = document.querySelector("#titulosupermassive")

sobre1.onclick = function() {
    if (oculto == true){
        sobresupermassive.style.display = "block";
        oculto = false;
    }
    else {
        sobresupermassive.style.display = "none";
        oculto = true;
    }
    
    }

sobre2.onclick = function() {
    if (oculto == true){
        linesupermassive.style.display = "block";
        oculto = false;
    }
    else {
        linesupermassive.style.display = "none";
        oculto = true;
    }
    
    }

sobre3.onclick = function() {
    if (oculto == true){
        titulosupermassive.style.display = "block";
        oculto = false;
    }
    else {
        titulosupermassive.style.display = "none";
        oculto = true;
    }
    
    }  

