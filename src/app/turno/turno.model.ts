export interface Turno {
    id?: number;
    utenteId: number;  // Collegamento all'utente assegnato al turno
    dataInizio: Date;
    dataFine: Date;
    tipoTurno: 'MATTINA' | 'POMERIGGIO' | 'NOTTE';  // Tipo di turno
    stato: 'ASSEGNATO' | 'COMPLETATO' | 'CANCELLATO';  // Stato del turno
  }
  