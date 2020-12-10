var sobre1 = document.querySelector("#subtopic49")
var sobre2 = document.querySelector("#subtopic50")
var sobre3 = document.querySelector("#subtopic51")
var oculto = true
var sobredrx = document.querySelector("#sobredrx")
var linedrx = document.querySelector("#linedrx")
var titulodrx = document.querySelector("#titulodrx")

sobre1.onclick = function() {
    if (oculto == true){
        sobredrx.style.display = "block";
        oculto = false;
    }
    else {
        sobredrx.style.display = "none";
        oculto = true;
    }
    
    }

sobre2.onclick = function() {
    if (oculto == true){
        linedrx.style.display = "block";
        oculto = false;
    }
    else {
        linedrx.style.display = "none";
        oculto = true;
    }
    
    }

sobre3.onclick = function() {
    if (oculto == true){
        titulodrx.style.display = "block";
        oculto = false;
    }
    else {
        titulodrx.style.display = "none";
        oculto = true;
    }
    
    }  

