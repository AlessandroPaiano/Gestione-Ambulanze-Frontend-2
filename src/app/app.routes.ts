import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'ambulanze', loadChildren: () => import('./ambulanza/ambulanza.module').then(m => m.AmbulanzaModule), canActivate: [AuthGuard] },
  { path: 'turni', loadChildren: () => import('./turno/turno.module').then(m => m.TurnoModule), canActivate: [AuthGuard] },
  { path: 'utenti', loadChildren: () => import('./utente/utente.module').then(m => m.UtenteModule), canActivate: [AuthGuard] },
  { path: 'interventi', loadChildren: () => import('./intervento/intervento.module').then(m => m.InterventoModule), canActivate: [AuthGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' },  // Reindirizza al login se non autenticato
  { path: '**', redirectTo: '/login' }  // Rotta predefinita per gestire errori
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
