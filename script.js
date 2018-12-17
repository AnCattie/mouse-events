//Oefening 1 
let hoverMe = function(event){
    event.target.style.display = "none"; // doet de div bij hoverMe weg (functie)
}
let div1 = document.getElementsByClassName("hoverMe")[0]; // selecteert & geeft variabel aan de 1ste class hoverMe
let div2 = document.getElementsByClassName("hoverMe")[1]; // selecteert & geeft variabel aan de 2e class hoverMe
let div3 = document.getElementsByClassName("hoverMe")[2]; // selecteert & geeft variabel aan de 3e class hoverMe
div1.addEventListener("mouseover", hoverMe); // Geeft een functie aan de eerste div --> als er met de muis over gegaan wordt, start de functie style display none 
div2.addEventListener("mouseover", hoverMe); // Geeft een functie aan de tweede div --> als er met de muis over gegaan wordt, start de functie style display none
div3.addEventListener("mouseover", hoverMe); // Geeft een functie aan de derde div --> als er met de muis over gegaan wordt, start de functie style display none

// Oefening 2
let appear = function(event){
    div1.style.display= "block"; // plaatst deze terug en blokkeert deze zodat ze blijven staan
    div2.style.display= "block"; // plaatst deze terug en blokkeert deze zodat ze blijven staan
    div3.style.display= "block"; // plaatst deze terug en blokkeert deze zodat ze blijven staan
};
let resetdiv = document.getElementById("reset"); // selecteerd de ID vanuit HMTL
resetdiv.addEventListener("click", appear); // wanneer je klikt op de button - zal de 1ste - 2e & 3e div terug verschijnen

// Oefening 3
function showCoords(event) { // functie om de coördinaten te tonen
    let x = event.clientX;
    let y = event.clientY;
    document.getElementById("x-axis").innerHTML = x; // geeft de coördinaten door van de x-as vanuit de HTML pagina.
    document.getElementById("y-axis").innerHTML = y; // geeft de coördinaten door van de y-as vanuit de HTML pagina.
    }
    let bodyRef = document.body; // bodyref = body (inhoud van de html pagina)
    bodyRef.addEventListener("mousemove", showCoords); // wanneer de muis over de pagina scrollt, zal hierbij de coördinaten weergegeven worden.