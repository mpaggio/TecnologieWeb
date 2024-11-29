// COSTANTE (leggibilità):
const risultato = document.querySelector("div");

// TESTO UPPERCASE:
// ******************************************
// document.querySelectorAll("input")[0];
// document.querySelector("input:first-of-type");
// document.querySelector("input[value='Testo uppercase']");
document
    .querySelector("input")
    .addEventListener("click", function(){
        let testo = risultato.innerHTML;
        testo = testo.toUpperCase();
        risultato.innerHTML = testo;
    });
// ******************************************


// TESTO LOWERCASE:
// ******************************************
document
    .querySelector("input[value='Testo lowercase']")
    .addEventListener("click", function(){
        let testo = risultato.innerHTML;
        testo = testo.toLowerCase();
        risultato.innerHTML = testo;
    });
// ******************************************


// TESTO SUBSTRING:
// ******************************************
document
    .querySelector("input:last-of-type")
    .addEventListener("click", function(){
        let testo = risultato.innerText;
        testo = testo.substring(5, testo.length) + testo.substring(0, 5);
        risultato.innerHTML = testo;
    });
// ******************************************

// APPUNTI:
// ******************************************
// innerHTML prende tutto il contenuto dalla chiusura del tag di apertura, all'apertura del tag di chiusura
// innerText prende dal primo carattere che non sia uno spazio, fino all'ultimo carattere che non è uno spazio
// ******************************************