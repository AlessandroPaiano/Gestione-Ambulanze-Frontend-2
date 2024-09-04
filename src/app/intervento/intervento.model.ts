export interface Intervento {
    id?: number;
    ambulanzaId: number;  // Collegamento all'ambulanza assegnata
    utenteId: number;  // Collegamento all'utente assegnato
    dataOra: Date;
    descrizione: string;
    stato: 'PENDING' | 'IN_PROGRESS' | 'COMPLETED' | 'CANCELLED';  // Stato dell'intervento
    priorita: 'ALTA' | 'MEDIA' | 'BASSA';  // Priorità dell'intervento
  }
  