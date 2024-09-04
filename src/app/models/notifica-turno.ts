import { Notifica } from './notifica';  // Importiamo l'interfaccia Notifica

export class NotificaTurno implements Notifica {
  constructor(private turnoId: number) {}

  // Implementazione del metodo getMessaggio per la notifica di un turno
  getMessaggio(): string {
    return `Hai un nuovo turno assegnato con ID: ${this.turnoId}`;
  }
}
