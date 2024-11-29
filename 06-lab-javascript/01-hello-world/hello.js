console.log("Hello World");

// APPUNTI:
// ************************************************
// Una variabile definita con const non può essere riassegnata
// Var genera una variabile globale che non ha visibilità di blocco, ma è visibile da tutto il codice (NON USARE!!!)
// Let permette di generare una variabile visibile solo a livello di blocco (PREFERIBILE!!!)
// ************************************************



// RECUPERO I RIFERIMENTI:
// ************************************************
const tagHello = document.querySelector("#ciao");
// Il metodo querySelector prende tutti quelli che fanno match e restituisce il primo, mentre il metodo querySelectorAll permette di avere tutta la lista di match
// Il "#" viene utilizzato per l'ID, mentre il "." serve per specificare una classe (sono i selettori, importanti sia in css che in javascript)
// const tagHello = document.getElementById("ciao");


const tagYear = document.querySelector(".anno");
// const tagYear = document.getElementsByClassName("anno")[0];
// const tagYear = document.querySelectorAll("body > p.anno");
// ************************************************


// SCRITTURA SUI RIFERIMENTI:
// ************************************************
tagHello.innerHTML = "Hello World";

tagYear.innerHTML = "2024 - 2025";
// ************************************************