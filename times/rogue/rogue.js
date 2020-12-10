var sobre1 = document.querySelector("#subtopic58")
var sobre2 = document.querySelector("#subtopic59")
var sobre3 = document.querySelector("#subtopic60")
var oculto = true
var sobrerogue = document.querySelector("#sobrerogue")
var linerogue = document.querySelector("#linerogue")
var titulorogue = document.querySelector("#titulorogue")

sobre1.onclick = function() {
    if (oculto == true){
        sobrerogue.style.display = "block";
        oculto = false;
    }
    else {
        sobrerogue.style.display = "none";
        oculto = true;
    }
    
    }

sobre2.onclick = function() {
    if (oculto == true){
        linerogue.style.display = "block";
        oculto = false;
    }
    else {
        linerogue.style.display = "none";
        oculto = true;
    }
    
    }

sobre3.onclick = function() {
    if (oculto == true){
        titulorogue.style.display = "block";
        oculto = false;
    }
    else {
        titulorogue.style.display = "none";
        oculto = true;
    }
    
    }  

