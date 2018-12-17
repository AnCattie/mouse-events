//Oefening 1 
let hoverMe = function(event){
    event.target.style.display = "none"; // doet de div bij hoverMe weg
}
let div1 = document.getElementsByClassName("hoverMe")[0];
let div2 = document.getElementsByClassName("hoverMe")[1];
let div3 = document.getElementsByClassName("hoverMe")[2];
div1.addEventListener("mouseover", hoverMe);
div2.addEventListener("mouseover", hoverMe);
div3.addEventListener("mouseover", hoverMe);

// Oefening 2
let appear = function(event){
    div1.style.display= "block";
    div2.style.display= "block";
    div3.style.display= "block";
};

let resetdiv = document.getElementById("reset");
resetdiv.addEventListener("click", appear);

// Oefening 3


function showCoords(event) {
    let x = event.clientX;
    let y = event.clientY;
    document.getElementById("x-axis").innerHTML = x;
    document.getElementById("y-axis").innerHTML = y;
    }
    let bodyRef = document.body;
    bodyRef.addEventListener("mousemove", showCoords);