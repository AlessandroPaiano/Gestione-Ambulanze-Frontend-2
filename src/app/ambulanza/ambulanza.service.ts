import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ambulanza } from './ambulanza.model';  // Definiamo il modello Ambulanza

@Injectable({
  providedIn: 'root'
})
export class AmbulanzaService {

  private apiUrl = 'http://localhost:8080/api/ambulanze';  // URL base per le API

  constructor(private http: HttpClient) {}

  // Ottiene tutte le ambulanze
  getAmbulanze(): Observable<Ambulanza[]> {
    return this.http.get<Ambulanza[]>(this.apiUrl);
  }

  // Ottiene i dettagli di una singola ambulanza
  getAmbulanza(id: number): Observable<Ambulanza> {
    return this.http.get<Ambulanza>(`${this.apiUrl}/${id}`);
  }

  // Crea o aggiorna un'ambulanza
  saveAmbulanza(ambulanza: Ambulanza): Observable<Ambulanza> {
    if (ambulanza.id) {
      return this.http.put<Ambulanza>(`${this.apiUrl}/${ambulanza.id}`, ambulanza);
    } else {
      return this.http.post<Ambulanza>(this.apiUrl, ambulanza);
    }
  }

  // Elimina un'ambulanza
  deleteAmbulanza(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
