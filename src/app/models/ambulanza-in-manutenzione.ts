import { GestioneAmbulanze } from './gestione-ambulanze';

export class AmbulanzaInManutenzione extends GestioneAmbulanze {

  // Override del metodo gestisci per gestire ambulanze in manutenzione
  override gestisci(): void {
    console.log(`L'ambulanza con ID: ${this.id} è in manutenzione e non disponibile.`);
  }
}
