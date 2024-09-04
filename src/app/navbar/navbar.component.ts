import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private authService: AuthService, private router: Router) {}

  // Funzione per eseguire il logout
  logout(): void {
    this.authService.logout();  // Esegue il logout e rimuove il token
    this.router.navigate(['/login']);  // Reindirizza al login
  }

  // Verifica se l'utente è autenticato
  isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }
}
