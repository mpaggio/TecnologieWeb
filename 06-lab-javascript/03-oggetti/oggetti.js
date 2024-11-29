class Computer {
    
    constructor(processore, disco, ram) {
        this.processore = processore;
        this.disco = disco;
        this.ram = ram;
    }
    
    infoComputerConsole() {
        console.log("Processore: " + this.processore + " - Disco: " + this.disco + " - Ram: " + this.ram);
    }
    
    infoComputerDOM(id) {
        document.getElementById(id).innerHTML = `
        <p>Processore: ${this.processore}</p>
        <p>Disco: ${this.disco}</p>
        <p>RAM: ${this.ram}</p>
        `;
    }
}





// DEFINIZIONE DI OGGETTI:
// *************************************
const mioPC = new Computer("i7", "6TB", "16GB");
mioPC.infoComputerConsole();
mioPC.infoComputerDOM("miopc");