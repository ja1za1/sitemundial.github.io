var sobre1 = document.querySelector("#subtopic13")
var sobre2 = document.querySelector("#subtopic14")
var sobre3 = document.querySelector("#subtopic15")
var oculto = true
var sobrerainbow7 = document.querySelector("#sobrerainbow7")
var linerainbow7 = document.querySelector("#linerainbow7")
var titulorainbow7 = document.querySelector("#titulorainbow7")

sobre1.onclick = function() {
    if (oculto == true){
        sobrerainbow7.style.display = "block";
        oculto = false;
    }
    else {
        sobrerainbow7.style.display = "none";
        oculto = true;
    }
    
    }

sobre2.onclick = function() {
    if (oculto == true){
        linerainbow7.style.display = "block";
        oculto = false;
    }
    else {
        linerainbow7.style.display = "none";
        oculto = true;
    }
    
    }

sobre3.onclick = function() {
    if (oculto == true){
        titulorainbow7.style.display = "block";
        oculto = false;
    }
    else {
        titulorainbow7.style.display = "none";
        oculto = true;
    }
    
    }  

