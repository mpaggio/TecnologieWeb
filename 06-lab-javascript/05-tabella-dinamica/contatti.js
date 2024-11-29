const datiTabella = [{
    "Autore": "Gino Pino",
    "Email": "ginopino@blogtw.com",
    "Argomenti": "HTML, CSS, JS",
    "Eta": "58"
},
{
    "Autore": "Cippa Lippa",
    "Email": "cippalippa@blogtw.com",
    "Argomenti": "PHP",
    "Eta": "32"
}]

function stringaToID(stringa){
    return stringa.toLowerCase().replace(/[^a-zA-Z]/g, "");
}

const table = document.querySelector("table");
const tableFirstRow = document.querySelector("tr:first-of-type");

for (let i=0; i < Object.keys(datiTabella[0]).length; i++){
    tableFirstRow.innerHTML += `
        <th id="${Object.keys(datiTabella[0])[i].toLowerCase()}">${Object.keys(datiTabella[0])[i]}</th>
    `
}

for (let i=0; i < datiTabella.length; i++){
    let dati = datiTabella[i];
    let id = stringaToID(dati["Autore"]);
    let headerMail = "email " + id;
    let headerArgomenti = "argomenti " + id;
    let riga = `
        <tr>
            <th id="${id}">${dati["Autore"]}</th><td headers="${headerMail}">${dati["Email"]}</td><td headers="${headerArgomenti}">${dati["Argomenti"]}</td>
        </tr>
        
    `

    table.innerHTML += riga;
}
