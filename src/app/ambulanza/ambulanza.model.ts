export interface Ambulanza {
    id?: number;  // `id` è opzionale perché potrebbe non essere presente quando creiamo una nuova ambulanza
    numeroVeicolo: string;
    stato: 'DISPONIBILE' | 'IN_SERVIZIO' | 'IN_MANUTENZIONE';  // Stato dell'ambulanza
  }
  