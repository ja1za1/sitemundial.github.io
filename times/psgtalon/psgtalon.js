var sobre1 = document.querySelector("#subtopic19")
var sobre2 = document.querySelector("#subtopic20")
var sobre3 = document.querySelector("#subtopic21")
var oculto = true
var sobrepsgtalon = document.querySelector("#sobrepsgtalon")
var linepsgtalon = document.querySelector("#linepsgtalon")
var titulopsgtalon = document.querySelector("#titulopsgtalon")

sobre1.onclick = function() {
    if (oculto == true){
        sobrepsgtalon.style.display = "block";
        oculto = false;
    }
    else {
        sobrepsgtalon.style.display = "none";
        oculto = true;
    }
    
    }

sobre2.onclick = function() {
    if (oculto == true){
        linepsgtalon.style.display = "block";
        oculto = false;
    }
    else {
        linepsgtalon.style.display = "none";
        oculto = true;
    }
    
    }

sobre3.onclick = function() {
    if (oculto == true){
        titulopsgtalon.style.display = "block";
        oculto = false;
    }
    else {
        titulopsgtalon.style.display = "none";
        oculto = true;
    }
    
    }  

