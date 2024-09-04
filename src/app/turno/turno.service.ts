import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Turno } from './turno.model';  // Modello Turno

@Injectable({
  providedIn: 'root'
})
export class TurnoService {

  private apiUrl = 'http://localhost:8080/api/turni';  // URL base per le API

  constructor(private http: HttpClient) {}

  // Ottiene tutti i turni
  getTurni(): Observable<Turno[]> {
    return this.http.get<Turno[]>(this.apiUrl);
  }

  // Ottiene un singolo turno per ID
  getTurno(id: number): Observable<Turno> {
    return this.http.get<Turno>(`${this.apiUrl}/${id}`);
  }

  // Crea o aggiorna un turno
  saveTurno(turno: Turno): Observable<Turno> {
    if (turno.id) {
      return this.http.put<Turno>(`${this.apiUrl}/${turno.id}`, turno);
    } else {
      return this.http.post<Turno>(this.apiUrl, turno);
    }
  }

  // Elimina un turno
  deleteTurno(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
