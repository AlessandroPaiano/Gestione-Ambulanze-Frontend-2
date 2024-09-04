import { Component, OnInit } from '@angular/core';
import { UtenteService } from '../utente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Utente } from '../utente.model';  // Importiamo il modello `Utente`

@Component({
  selector: 'app-utente-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  utente: Utente = { nome: '', cognome: '', email: '', ruolo: 'OPERATOR' };

  constructor(
    private utenteService: UtenteService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.loadUtente(+id);  // Carica i dettagli dell'utente se un ID è presente nella route
    }
  }

  // Carica un utente per ID dal backend
  loadUtente(id: number): void {
    this.utenteService.getUtente(id).subscribe(
      data => this.utente = data,
      error => console.error('Errore nel caricamento dell\'utente', error)  // Gestione degli errori
    );
  }

  // Salva o aggiorna l'utente
  saveUtente(): void {
    this.utenteService.saveUtente(this.utente).subscribe(
      () => this.router.navigate(['/utenti']),  // Ritorna alla lista degli utenti dopo il salvataggio
      error => console.error('Errore nel salvataggio dell\'utente', error)  // Gestione degli errori
    );
  }
}
