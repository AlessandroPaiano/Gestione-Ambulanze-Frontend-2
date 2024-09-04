import { Notifica } from './notifica'  // Importiamo l'interfaccia Notifica

export class NotificaIntervento implements Notifica {
  constructor(private interventoId: number) {}

  // Implementazione del metodo getMessaggio per la notifica di un intervento
  getMessaggio(): string {
    return `Hai un nuovo intervento assegnato con ID: ${this.interventoId}`;
  }
}
