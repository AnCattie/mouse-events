//Oefening 1 

function onzichtbaar(x){ // in html element al geselecteerd adhv (onmouseover - zichtbaar voor THIS div) - deze functie doorgegeven. x = hoverMe classes
    x.style.visibility = "hidden"; // classes verbergen als er met de muis over wordt gegaan.
}

// Oefening 2
let oefening1 = document.getElementsByClassName("hoverMe"); // divs geselecteerd van oefening 1
function zichtbaar(){ // functie toewijzen voor zichtbaar te maken
    for (i=0; i < oefening1.length; i++){ // i is 0, als i kleiner dan de lengte van oefenign 1 = dan is het i +1
        oefening1[i].style.visibility = "visible"; // oefening 1 (i) wordt zichtbaar bij het klikken op de button
    }
}

// Oefening 3
function showCoords(event) { // functie om de coördinaten te tonen
    let x = event.clientX;
    let y = event.clientY;
    document.getElementById("x-axis").innerHTML = x; // geeft de coördinaten door van de x-as vanuit de HTML pagina.
    document.getElementById("y-axis").innerHTML = y; // geeft de coördinaten door van de y-as vanuit de HTML pagina.
    }
    let bodyRef = document.body; // bodyref = body (inhoud van de html pagina)
    bodyRef.addEventListener("mousemove", showCoords); // wanneer de muis over de pagina scrollt, zal hierbij de coördinaten weergegeven worden.