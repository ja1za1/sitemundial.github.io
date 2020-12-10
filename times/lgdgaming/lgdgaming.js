var sobre1 = document.querySelector("#subtopic25")
var sobre2 = document.querySelector("#subtopic26")
var sobre3 = document.querySelector("#subtopic27")
var oculto = true
var sobrelgdgaming = document.querySelector("#sobrelgdgaming")
var linelgdgaming = document.querySelector("#linelgdgaming")
var titulolgdgaming = document.querySelector("#titulolgdgaming")

sobre1.onclick = function() {
    if (oculto == true){
        sobrelgdgaming.style.display = "block";
        oculto = false;
    }
    else {
        sobrelgdgaming.style.display = "none";
        oculto = true;
    }
    
    }

sobre2.onclick = function() {
    if (oculto == true){
        linelgdgaming.style.display = "block";
        oculto = false;
    }
    else {
        linelgdgaming.style.display = "none";
        oculto = true;
    }
    
    }

sobre3.onclick = function() {
    if (oculto == true){
        titulolgdgaming.style.display = "block";
        oculto = false;
    }
    else {
        titulolgdgaming.style.display = "none";
        oculto = true;
    }
    
    }  

