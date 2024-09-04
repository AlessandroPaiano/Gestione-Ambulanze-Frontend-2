import { Component, OnInit } from '@angular/core';
import { UtenteService } from '../utente.service';
import { Utente } from '../utente.model';  // Importiamo il modello `Utente`

@Component({
  selector: 'app-utente-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  utenti: Utente[] = [];  // Array che conterrà la lista degli utenti

  constructor(private utenteService: UtenteService) { }

  // Metodo che viene eseguito all'inizializzazione del componente
  ngOnInit(): void {
    this.loadUtenti();  // Carica gli utenti quando il componente viene inizializzato
  }

  // Metodo per caricare tutti gli utenti dal backend
  loadUtenti(): void {
    this.utenteService.getUtenti().subscribe(
      data => this.utenti = data,
      error => console.error('Errore nel recupero degli utenti', error)  // Gestione degli errori
    );
  }

  // Metodo per eliminare un utente tramite il suo ID
  deleteUtente(id: number): void {
    if (confirm('Sei sicuro di voler eliminare questo utente?')) {
      this.utenteService.deleteUtente(id).subscribe(() => {
        this.loadUtenti();  // Ricarica la lista degli utenti dopo l'eliminazione
      });
    }
  }
}
