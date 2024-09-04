import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginUrl = 'http://localhost:8080/api/auth/login';  // Endpoint per il login

  constructor(private http: HttpClient, private router: Router) {}

  // Funzione per eseguire il login
  login(email: string, password: string): Observable<any> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    const body = JSON.stringify({email, password});
    return this.http.post(this.loginUrl, body, { headers });
  }

  // Funzione per salvare il token JWT in locale
  saveToken(token: string): void {
    localStorage.setItem('authToken', token);
  }

  // Funzione per recuperare il token JWT
  getToken(): string | null {
    return localStorage.getItem('authToken');
  }

  // Funzione per effettuare il logout
  logout(): void {
    localStorage.removeItem('authToken');
    this.router.navigate(['/login']);  // Ritorna alla pagina di login
  }

  // Funzione per verificare se l'utente è autenticato
  isAuthenticated(): boolean {
    return !!this.getToken();
  }
}
