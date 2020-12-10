var sobre1 = document.querySelector("#subtopic22")
var sobre2 = document.querySelector("#subtopic23")
var sobre3 = document.querySelector("#subtopic24")
var oculto = true
var sobreteamliquid = document.querySelector("#sobreteamliquid")
var lineteamliquid = document.querySelector("#lineteamliquid")
var tituloteamliquid = document.querySelector("#tituloteamliquid")

sobre1.onclick = function() {
    if (oculto == true){
        sobreteamliquid.style.display = "block";
        oculto = false;
    }
    else {
        sobreteamliquid.style.display = "none";
        oculto = true;
    }
    
    }

sobre2.onclick = function() {
    if (oculto == true){
        lineteamliquid.style.display = "block";
        oculto = false;
    }
    else {
        lineteamliquid.style.display = "none";
        oculto = true;
    }
    
    }

sobre3.onclick = function() {
    if (oculto == true){
        tituloteamliquid.style.display = "block";
        oculto = false;
    }
    else {
        tituloteamliquid.style.display = "none";
        oculto = true;
    }
    
    }  

