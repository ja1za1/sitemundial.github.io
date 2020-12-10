var sobre1 = document.querySelector("#subtopic1")
var sobre2 = document.querySelector("#subtopic2")
var sobre3 = document.querySelector("#subtopic3")
var oculto = true
var sobreintz = document.querySelector("#sobreINTZ")
var lineintz = document.querySelector("#lineINTZ")
var titulointz = document.querySelector("#tituloINTZ")

sobre1.onclick = function() {
    if (oculto == true){
        sobreintz.style.display = "block";
        oculto = false;
    }
    else {
        sobreintz.style.display = "none";
        oculto = true;
    }
    
    }

sobre2.onclick = function() {
    if (oculto == true){
        lineintz.style.display = "block";
        oculto = false;
    }
    else {
        lineintz.style.display = "none";
        oculto = true;
    }
    
    }

sobre3.onclick = function() {
    if (oculto == true){
        titulointz.style.display = "block";
        oculto = false;
    }
    else {
        titulointz.style.display = "none";
        oculto = true;
    }
    
    }  

