export interface Utente {
    id?: number;
    nome: string;
    cognome: string;
    email: string;
    ruolo: 'ADMIN' | 'OPERATOR' | 'MEDIC';  // Ruolo dell'utente
  }
  