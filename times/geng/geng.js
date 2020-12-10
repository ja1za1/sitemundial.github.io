var sobre1 = document.querySelector("#subtopic61")
var sobre2 = document.querySelector("#subtopic62")
var sobre3 = document.querySelector("#subtopic63")
var oculto = true
var sobregeng = document.querySelector("#sobregeng")
var linegeng = document.querySelector("#linegeng")
var titulogeng = document.querySelector("#titulogeng")

sobre1.onclick = function() {
    if (oculto == true){
        sobregeng.style.display = "block";
        oculto = false;
    }
    else {
        sobregeng.style.display = "none";
        oculto = true;
    }
    
    }

sobre2.onclick = function() {
    if (oculto == true){
        linegeng.style.display = "block";
        oculto = false;
    }
    else {
        linegeng.style.display = "none";
        oculto = true;
    }
    
    }

sobre3.onclick = function() {
    if (oculto == true){
        titulogeng.style.display = "block";
        oculto = false;
    }
    else {
        titulogeng.style.display = "none";
        oculto = true;
    }
    
    }  

