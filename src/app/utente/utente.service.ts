import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Utente } from './utente.model';  // Importiamo il modello `Utente`

@Injectable({
  providedIn: 'root'
})
export class UtenteService {

  private apiUrl = 'http://localhost:8080/api/utenti';  // URL base per le API degli utenti

  constructor(private http: HttpClient) {}

  // Ottiene tutti gli utenti dal backend
  getUtenti(): Observable<Utente[]> {
    return this.http.get<Utente[]>(this.apiUrl);
  }

  // Ottiene un singolo utente per ID
  getUtente(id: number): Observable<Utente> {
    return this.http.get<Utente>(`${this.apiUrl}/${id}`);
  }

  // Crea o aggiorna un utente
  saveUtente(utente: Utente): Observable<Utente> {
    if (utente.id) {
      return this.http.put<Utente>(`${this.apiUrl}/${utente.id}`, utente);  // Aggiorna un utente esistente
    } else {
      return this.http.post<Utente>(this.apiUrl, utente);  // Crea un nuovo utente
    }
  }

  // Elimina un utente per ID
  deleteUtente(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
