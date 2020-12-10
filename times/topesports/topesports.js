var sobre1 = document.querySelector("#subtopic31")
var sobre2 = document.querySelector("#subtopic32")
var sobre3 = document.querySelector("#subtopic33")
var oculto = true
var sobretes = document.querySelector("#sobretopesports")
var linetes = document.querySelector("#linetopesports")
var titulotes = document.querySelector("#titulotopesports")

sobre1.onclick = function() {
    if (oculto == true){
        sobretes.style.display = "block";
        oculto = false;
    }
    else {
        sobretes.style.display = "none";
        oculto = true;
    }
    
    }

sobre2.onclick = function() {
    if (oculto == true){
        linetes.style.display = "block";
        oculto = false;
    }
    else {
        linetes.style.display = "none";
        oculto = true;
    }
    
    }

sobre3.onclick = function() {
    if (oculto == true){
        titulotes.style.display = "block";
        oculto = false;
    }
    else {
        titulotes.style.display = "none";
        oculto = true;
    }
    
    }  

