import { GestioneAmbulanze } from './gestione-ambulanze';

export class AmbulanzaDisponibile extends GestioneAmbulanze {

  // Override del metodo gestisci per gestire ambulanze disponibili
  override gestisci(): void {
    console.log(`L'ambulanza con ID: ${this.id} è disponibile per nuovi interventi.`);
  }
}
