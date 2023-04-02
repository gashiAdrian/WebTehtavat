'use strict';

const nimi=document.getElementById("nimi"); // Muuttujan nimi voi olla sama kuin id:n tunnus
const yht=document.getElementById("yht");

// Nimi ja nimen pituus
document.getElementById("nappi").addEventListener("click", function () {
  var name = prompt("Syötä nimesi:");
  document.getElementById("nimi").innerHTML = "Sinun nimesi on " + name + " ja nimesi pituus on " + name.length;
});

let eka=10, toka=20;
let luvut = [5, 25, 14, 9, 66];

//nimi.innerHTML="Moi, " + etunimi + ". Nimesi pituus on " + etunimi.length + " merkkiä.";
yht.innerHTML=eka+toka;

// Yhteenlaskua

function kysyNumerojaLaskeSumma() {
    var num1 = parseFloat(prompt("Anna ensimmäinen luku:"));
    var num2 = parseFloat(prompt("Anna toinen luku:"));

    var sum = num1 + num2;

    Document.getElementById("yht").innerHTML = "Lukujen summa on " + sum;
}

kysyNumerojaLaskeSumma();

d

