// Classe Incentivo
var Incentivo = /** @class */ (function () {
    function Incentivo(codice, descrizione, valore, criteriEleggibilita) {
        this.codice = codice;
        this.descrizione = descrizione;
        this.valore = valore;
        this.criteriEleggibilita = criteriEleggibilita;
    }
    Incentivo.prototype.assegnaAStartup = function (startup) {
        console.log("Incentivo ".concat(this.descrizione, " del valore di \u20AC").concat(this.valore, " assegnato alla startup \"").concat(startup.nome, "\"."));
        startup.riceviIncentivo(this);
    };
    return Incentivo;
}());
// Classe Startup
var Startup = /** @class */ (function () {
    function Startup(nome, settoreFocus, descrizione, prodottiServizi) {
        this.nome = nome;
        this.settoreFocus = settoreFocus;
        this.descrizione = descrizione;
        this.prodottiServizi = prodottiServizi;
    }
    Startup.prototype.riceviIncentivo = function (incentivo) {
        console.log("La startup \"".concat(this.nome, "\" ha ricevuto l'incentivo \"").concat(incentivo.descrizione, "\"."));
    };
    return Startup;
}());
// Classe Cittadino
var Cittadino = /** @class */ (function () {
    function Cittadino(nome, cognome, eta, interessiSportivi) {
        this.nome = nome;
        this.cognome = cognome;
        this.eta = eta;
        this.interessiSportivi = interessiSportivi;
    }
    Cittadino.prototype.partecipaAttività = function (startup) {
        console.log("".concat(this.nome, " ").concat(this.cognome, " partecipa alle attivit\u00E0 offerte dalla startup \"").concat(startup.nome, "\"."));
    };
    return Cittadino;
}());
// ESEMPI DI UTILIZZO
// Istanza di Startup
var startup1 = new Startup("FitWear", "Tecnologie wearable", "Sviluppa sensori intelligenti per il monitoraggio della performance sportiva.", ["Smartwatch", "Sensori per il monitoraggio cardiaco"]);
var startup2 = new Startup("MoveApp", "App per il fitness", "Crea app interattive per allenamenti personalizzati.", ["App di allenamento", "Piani fitness personalizzati"]);
// Istanza di Incentivo
var incentivo1 = new Incentivo("INC001", "Sostegno alla digitalizzazione dello sport", 10000, "Startup che integrano tecnologie digitali innovative nello sport");
var incentivo2 = new Incentivo("INC002", "Promozione dell'attività fisica per giovani", 5000, "Progetti che incentivano lo sport nei giovani");
// Istanza di Cittadino
var cittadino1 = new Cittadino("Anna", "Bianchi", 25, ["Yoga", "Corsa"]);
var cittadino2 = new Cittadino("Luca", "Verdi", 40, ["Ciclismo", "Escursionismo"]);
// Test della logica di assegnazione degli incentivi
console.log("Assegnazione degli incentivi alle startup:");
incentivo1.assegnaAStartup(startup1);
incentivo2.assegnaAStartup(startup2);
// Test della logica di partecipazione dei cittadini alle attività delle startup
console.log("\nPartecipazione dei cittadini alle attività delle startup:");
cittadino1.partecipaAttività(startup1);
cittadino2.partecipaAttività(startup2);
