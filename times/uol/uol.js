var sobre1 = document.querySelector("#subtopic10")
var sobre2 = document.querySelector("#subtopic11")
var sobre3 = document.querySelector("#subtopic12")
var oculto = true
var sobreuol = document.querySelector("#sobreuol")
var lineuol = document.querySelector("#lineuol")
var titulouol = document.querySelector("#titulouol")

sobre1.onclick = function() {
    if (oculto == true){
        sobreuol.style.display = "block";
        oculto = false;
    }
    else {
        sobreuol.style.display = "none";
        oculto = true;
    }
    
    }

sobre2.onclick = function() {
    if (oculto == true){
        lineuol.style.display = "block";
        oculto = false;
    }
    else {
        lineuol.style.display = "none";
        oculto = true;
    }
    
    }

sobre3.onclick = function() {
    if (oculto == true){
        titulouol.style.display = "block";
        oculto = false;
    }
    else {
        titulouol.style.display = "none";
        oculto = true;
    }
    
    }  

