import { Component, OnInit } from '@angular/core';
import { AmbulanzaService } from '../ambulanza.service';
import { Ambulanza } from '../ambulanza.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  ambulanze: Ambulanza[] = [];

  constructor(private ambulanzaService: AmbulanzaService) { }

  // Funzione che viene eseguita all'inizializzazione del componente
  ngOnInit(): void {
    this.loadAmbulanze();
  }

  // Carica tutte le ambulanze
  loadAmbulanze(): void {
    this.ambulanzaService.getAmbulanze().subscribe(
      data => this.ambulanze = data,
      error => console.error('Errore nel recupero delle ambulanze', error)
    );
  }

  // Elimina un'ambulanza
  deleteAmbulanza(id: number): void {
    if (confirm('Sei sicuro di voler eliminare questa ambulanza?')) {
      this.ambulanzaService.deleteAmbulanza(id).subscribe(() => {
        this.loadAmbulanze();  // Ricarica la lista delle ambulanze dopo l'eliminazione
      });
    }
  }
}
