import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  // Verifica se l'utente è autenticato
  canActivate(): boolean {
    if (this.authService.isAuthenticated()) {
      return true;  // L'utente è autenticato, può accedere alla rotta
    } else {
      this.router.navigate(['/login']);  // L'utente non è autenticato, viene reindirizzato al login
      return false;
    }
  }
}
