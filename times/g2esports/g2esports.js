var sobre1 = document.querySelector("#subtopic34")
var sobre2 = document.querySelector("#subtopic35")
var sobre3 = document.querySelector("#subtopic36")
var oculto = true
var sobreg2 = document.querySelector("#sobreg2esports")
var lineg2 = document.querySelector("#lineg2esports")
var titulog2 = document.querySelector("#titulog2esports")

sobre1.onclick = function() {
    if (oculto == true){
        sobreg2.style.display = "block";
        oculto = false;
    }
    else {
        sobreg2.style.display = "none";
        oculto = true;
    }
    
    }

sobre2.onclick = function() {
    if (oculto == true){
        lineg2.style.display = "block";
        oculto = false;
    }
    else {
        lineg2.style.display = "none";
        oculto = true;
    }
    
    }

sobre3.onclick = function() {
    if (oculto == true){
        titulog2.style.display = "block";
        oculto = false;
    }
    else {
        titulog2.style.display = "none";
        oculto = true;
    }
    
    }  

