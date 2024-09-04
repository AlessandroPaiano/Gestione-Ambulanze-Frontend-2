import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Intervento } from './intervento.model';

@Injectable({
  providedIn: 'root'
})
export class InterventoService {

  private apiUrl = 'http://localhost:8080/api/interventi';

  constructor(private http: HttpClient) {}

  // Ottiene tutti gli interventi
  getInterventi(): Observable<Intervento[]> {
    return this.http.get<Intervento[]>(this.apiUrl);
  }

  // Ottiene i dettagli di un singolo intervento
  getIntervento(id: number): Observable<Intervento> {
    return this.http.get<Intervento>(`${this.apiUrl}/${id}`);
  }

  // Crea o aggiorna un intervento
  saveIntervento(intervento: Intervento): Observable<Intervento> {
    if (intervento.id) {
      return this.http.put<Intervento>(`${this.apiUrl}/${intervento.id}`, intervento);
    } else {
      return this.http.post<Intervento>(this.apiUrl, intervento);
    }
  }

  // Elimina un intervento
  deleteIntervento(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}