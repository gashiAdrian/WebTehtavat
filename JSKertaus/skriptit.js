'use strict';

const nimi = document.getElementById("nimi"); // Muuttujan nimi voi olla sama kuin id:n tunnus
const yht = document.getElementById("yht");


// Nimi ja nimen pituus
function kysyNimi() {
  var name = prompt("Syötä nimesi:");
  document.getElementById("nimi").innerHTML = "Sinun nimesi on " + name + " ja nimesi pituus on " + name.length;
}

// Kysytään nimi heti sivulle mentäessä
kysyNimi();

// Nimi ja nimen pituus
document.getElementById("nappi").addEventListener("click", kysyNimi);

let eka = 10, toka = 20;

// Yhteenlaskua
yht.innerHTML = eka + toka;

// nymerojalaskenta promptilla
/*
function kysyNumerojaJaLaskeLaskutoimitukset() {
  var num1 = parseFloat(prompt("Anna ensimmäinen luku:"));
  var num2 = parseFloat(prompt("Anna toinen luku:"));

  var sum = num1 + num2;
  var diff = num1 - num2;
  var product = num1 * num2;
  var quotient = (num1 / num2).toFixed(2);

  document.getElementById("yhteensa").innerHTML = "Lukujen summa on " + sum + ", erotus on " + diff + ", tulo on " + product + " ja osamäärä on " + quotient;
}

kysyNumerojaJaLaskeLaskutoimitukset();
*/


// Kysytaan numerot ja lasketaan toimitukset, lomakeformilla.
const laske = document.getElementById("laske");

laske.addEventListener("click", function (evt) {
  evt.preventDefault();

  var num1 = parseFloat(document.getElementById("luku1").value);
  var num2 = parseFloat(document.getElementById("luku2").value);

  var sum = num1 + num2;
  var diff = num1 - num2;
  var product = num1 * num2;
  var quotient = (num1 / num2).toFixed(2);

  document.getElementById("yhteensa").innerHTML = "Lukujen summa on " + sum + ", erotus on " + diff + ", tulo on " + product + " ja osamäärä on " + quotient;
});

/* Painoindeksi promptilla

function laskePainoindeksi() {
  var paino = parseFloat(prompt("Anna painosi kilogrammoina (esim. 70):"));
  var pituus = parseFloat(prompt("Anna pituutesi metreinä (esim. 1.75):"));

  var bmi = paino / (pituus * pituus);

  document.getElementById("bmi").innerHTML = "Painoindeksisi on: " + bmi.toFixed(1);
}

laskePainoindeksi();

*/

// Painoindeksi lomakeformilla
const laske_bmi = document.getElementById("laske_bmi");

laske_bmi.addEventListener("click", function (evt) {
  evt.preventDefault();

  var paino = parseFloat(document.getElementById("paino").value);
  var pituus = parseFloat(document.getElementById("pituus").value);

  var bmi = paino / (pituus * pituus);

  document.getElementById("bmi").innerHTML = "Painoindeksisi on: " + bmi.toFixed(1);
});

//Taulukko ja taulukon lajittelu

const taulukko = document.getElementById("taulukko");

let luvut = [5, 25, 14, 9, 66];

// lisätään taulukon loppuun luku 54
luvut.push(54);
taulukko.innerHTML += "Taulukko luvun 54 lisäyksen jälkeen: " + luvut + "<br>";

// Poista taulukon ensimmäinen alkio
luvut.shift();
taulukko.innerHTML += "Taulukko ensimmäisen alkion poiston jälkeen: " + luvut + "<br>";

// Järjestetään taulukko aakkosnumeerisesti
luvut.sort();
taulukko.innerHTML += "Taulukko aakkosnumeerisen järjestyksen mukaan: " + luvut + "<br>";

// järjestetään taulukko numeerisesti
luvut.sort(function (a, b) { return a - b });
taulukko.innerHTML += "Taulukko numeerisen järjestyksen mukaan: " + luvut + "<br>";

// Taulukko järjestettyyn listaan 
function taulukkoJarjestettyynListaan(arr) {
  let lista = "<ol>";
  for (let i = 0; i < arr.length; i++) {
    lista += "<li>" + arr[i] + "</li>";
  }
  lista += "</ol>";
  return lista;
}

const taulukkoLista = document.getElementById("taulukkoLista");

taulukkoLista.innerHTML = taulukkoJarjestettyynListaan(luvut);

// Noppa

function HeitaKaksi(silmaluku, kerrat) {
  const jakauma = new Array(11).fill(0);

  for (let i = 0; i < kerrat; i++) {
    const noppa1 = Math.floor(Math.random() * silmaluku) + 1;
    const noppa2 = Math.floor(Math.random() * silmaluku) + 1;
    const tulos = noppa1 + noppa2;

    jakauma[tulos - 2]++;
  }

  return jakauma;
}

// kutsutaan funktio 6 kertaa
const jakauma = HeitaKaksi(6, 100);

// luodaan taulukkJarjestettyynListaan
function NopatJarjestettyynListaan(arr) {
  let lista = "<ul>";
  for (let i = 0; i < arr.length; i++) {
    lista += "<li>" + (i + 2) + ": " + arr[i] + " kertaa" + "</li>";
  }
  lista += "</ul>";
  return lista;
}

//Kutsutaan funktiota taulukkoJarjestettyynListaan ja tulosta jakauma listaan:

const noppaTulokset = document.getElementById("noppaTulokset");
noppaTulokset.innerHTML = NopatJarjestettyynListaan(jakauma);

//document.querySelector('#nimi').setAttribute('class', 'sininen');

//vaihta väri buttdon
document.getElementById("vaihdaSiniseksi").addEventListener("click", function () {
  document.querySelector("#nimi").classList.add("sininen");
  document.querySelector("#nimi").classList.remove("huom");
});

document.getElementById("vaihdaPunaiseksi").addEventListener("click", function () {
  document.querySelector("#nimi").classList.add("huom");
  document.querySelector("#nimi").classList.remove("sininen");
});


// Lomakeformi nimelle
const submit = document.getElementById("submit");

submit.addEventListener("click", function sanonimi(evt) {
  evt.preventDefault();
  // Tähän tarvitaan vähän lisää koodia…
  const etunimi = document.getElementById("etunimi").value;
  document.getElementById("nimi").innerHTML = "Sinun nimesi on " + etunimi + " ja nimesi pituus on " + etunimi.length;
});