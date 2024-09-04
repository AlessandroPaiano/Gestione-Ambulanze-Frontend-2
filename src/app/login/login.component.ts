import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  // Funzione per gestire il login
  login(): void {
    this.authService.login(this.email, this.password).subscribe(
      (response: any) => {
        this.authService.saveToken(response.token);  // Salva il token JWT ricevuto dal server
        this.router.navigate(['/']);  // Naviga alla home dopo il login
      },
      (error) => {
        this.errorMessage = 'Email o password non corretti';
      }
    );
  }
}
