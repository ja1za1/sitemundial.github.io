var sobre1 = document.querySelector("#subtopic37")
var sobre2 = document.querySelector("#subtopic38")
var sobre3 = document.querySelector("#subtopic39")
var oculto = true
var sobredamwon = document.querySelector("#sobredamwon")
var linedamwon = document.querySelector("#linedamwon")
var titulodamwon = document.querySelector("#titulodamwon")

sobre1.onclick = function() {
    if (oculto == true){
        sobredamwon.style.display = "block";
        oculto = false;
    }
    else {
        sobredamwon.style.display = "none";
        oculto = true;
    }
    
    }

sobre2.onclick = function() {
    if (oculto == true){
        linedamwon.style.display = "block";
        oculto = false;
    }
    else {
        linedamwon.style.display = "none";
        oculto = true;
    }
    
    }

sobre3.onclick = function() {
    if (oculto == true){
        titulodamwon.style.display = "block";
        oculto = false;
    }
    else {
        titulodamwon.style.display = "none";
        oculto = true;
    }
    
    }  

