// Interfaccia IIncentivo
interface IIncentivo {
    codice: string;
    descrizione: string;
    valore: number;
    criteriEleggibilita: string;
  
    assegnaAStartup(startup: IStartup): void;
  }
  
  // Interfaccia IStartup
  interface IStartup {
    nome: string;
    settoreFocus: string;
    descrizione: string;
    prodottiServizi: string[];
  
    riceviIncentivo(incentivo: IIncentivo): void;
  }
  
  // Interfaccia ICittadino
  interface ICittadino {
    nome: string;
    cognome: string;
    eta: number;
    interessiSportivi: string[];
  
    partecipaAttività(startup: IStartup): void;
  }
  
  // Classe Incentivo
  class Incentivo implements IIncentivo {
    codice: string;
    descrizione: string;
    valore: number;
    criteriEleggibilita: string;
  
    constructor(
      codice: string,
      descrizione: string,
      valore: number,
      criteriEleggibilita: string
    ) {
      this.codice = codice;
      this.descrizione = descrizione;
      this.valore = valore;
      this.criteriEleggibilita = criteriEleggibilita;
    }
  
    assegnaAStartup(startup: IStartup): void {
      console.log(
        `Incentivo ${this.descrizione} del valore di €${this.valore} assegnato alla startup "${startup.nome}".`
      );
      startup.riceviIncentivo(this);
    }
  }
  
  // Classe Startup
  class Startup implements IStartup {
    nome: string;
    settoreFocus: string;
    descrizione: string;
    prodottiServizi: string[];
  
    constructor(
      nome: string,
      settoreFocus: string,
      descrizione: string,
      prodottiServizi: string[]
    ) {
      this.nome = nome;
      this.settoreFocus = settoreFocus;
      this.descrizione = descrizione;
      this.prodottiServizi = prodottiServizi;
    }
  
    riceviIncentivo(incentivo: IIncentivo): void {
      console.log(
        `La startup "${this.nome}" ha ricevuto l'incentivo "${incentivo.descrizione}".`
      );
    }
  }
  
  // Classe Cittadino
  class Cittadino implements ICittadino {
    nome: string;
    cognome: string;
    eta: number;
    interessiSportivi: string[];
  
    constructor(
      nome: string,
      cognome: string,
      eta: number,
      interessiSportivi: string[]
    ) {
      this.nome = nome;
      this.cognome = cognome;
      this.eta = eta;
      this.interessiSportivi = interessiSportivi;
    }
  
    partecipaAttività(startup: IStartup): void {
      console.log(
        `${this.nome} ${this.cognome} partecipa alle attività offerte dalla startup "${startup.nome}".`
      );
    }
  }
  
  

// ESEMPI DI UTILIZZO


  // Istanza di Startup
  const startup1 = new Startup(
    "FitWear",
    "Tecnologie wearable",
    "Sviluppa sensori intelligenti per il monitoraggio della performance sportiva.",
    ["Smartwatch", "Sensori per il monitoraggio cardiaco"]
  );
  
  const startup2 = new Startup(
    "MoveApp",
    "App per il fitness",
    "Crea app interattive per allenamenti personalizzati.",
    ["App di allenamento", "Piani fitness personalizzati"]
  );
  
  // Istanza di Incentivo
  const incentivo1 = new Incentivo(
    "INC001",
    "Sostegno alla digitalizzazione dello sport",
    10000,
    "Startup che integrano tecnologie digitali innovative nello sport"
  );
  
  const incentivo2 = new Incentivo(
    "INC002",
    "Promozione dell'attività fisica per giovani",
    5000,
    "Progetti che incentivano lo sport nei giovani"
  );
  
  // Istanza di Cittadino
  const cittadino1 = new Cittadino(
    "Anna",
    "Bianchi",
    25,
    ["Yoga", "Corsa"]
  );
  
  const cittadino2 = new Cittadino(
    "Luca",
    "Verdi",
    40,
    ["Ciclismo", "Escursionismo"]
  );
  
  // Test della logica di assegnazione degli incentivi
  console.log("Assegnazione degli incentivi alle startup:");
  incentivo1.assegnaAStartup(startup1);
  incentivo2.assegnaAStartup(startup2);
  
  // Test della logica di partecipazione dei cittadini alle attività delle startup
  console.log("\nPartecipazione dei cittadini alle attività delle startup:");
  cittadino1.partecipaAttività(startup1);
  cittadino2.partecipaAttività(startup2);
  