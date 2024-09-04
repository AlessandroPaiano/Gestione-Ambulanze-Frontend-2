export class GestioneAmbulanze {
    constructor(public id: number, public stato: string) {}
  
    // Metodo polimorfico che gestirà il comportamento delle ambulanze
    gestisci(): void {
      console.log(`Gestione generale per l'ambulanza con ID: ${this.id}`);
    }
  }
  