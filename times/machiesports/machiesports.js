var sobre1 = document.querySelector("#subtopic64")
var sobre2 = document.querySelector("#subtopic65")
var sobre3 = document.querySelector("#subtopic66")
var oculto = true
var sobremachiesports = document.querySelector("#sobremachiesports")
var linemachiesports = document.querySelector("#linemachiesports")
var titulomachiesports = document.querySelector("#titulomachiesports")

sobre1.onclick = function() {
    if (oculto == true){
        sobremachiesports.style.display = "block";
        oculto = false;
    }
    else {
        sobremachiesports.style.display = "none";
        oculto = true;
    }
    
    }

sobre2.onclick = function() {
    if (oculto == true){
        linemachiesports.style.display = "block";
        oculto = false;
    }
    else {
        linemachiesports.style.display = "none";
        oculto = true;
    }
    
    }

sobre3.onclick = function() {
    if (oculto == true){
        titulomachiesports.style.display = "block";
        oculto = false;
    }
    else {
        titulomachiesports.style.display = "none";
        oculto = true;
    }
    
    }  

