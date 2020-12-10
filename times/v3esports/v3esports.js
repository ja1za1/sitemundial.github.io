var sobre4 = document.querySelector("#subtopic4")
var sobre5 = document.querySelector("#subtopic5")
var sobre6 = document.querySelector("#subtopic6")
var oculto = true
var sobrev3 = document.querySelector("#sobrev3")
var linev3 = document.querySelector("#linev3")
var titulov3 = document.querySelector("#titulov3")

sobre4.onclick = function() {
    if (oculto == true){
        sobrev3.style.display = "block";
        oculto = false;
    }
    else {
        sobrev3.style.display = "none";
        oculto = true;
    }
    
    }

sobre5.onclick = function() {
    if (oculto == true){
        linev3.style.display = "block";
        oculto = false;
    }
    else {
        linev3.style.display = "none";
        oculto = true;
    }
    
    }

sobre6.onclick = function() {
    if (oculto == true){
        titulov3.style.display = "block";
        oculto = false;
    }
    else {
        titulov3.style.display = "none";
        oculto = true;
    }
    
    }  

