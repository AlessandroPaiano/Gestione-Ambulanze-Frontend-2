import { Component, OnInit } from '@angular/core';
import { InterventoService } from '../intervento.service';
import { Intervento } from '../intervento.model';

@Component({
  selector: 'app-intervento-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  interventi: Intervento[] = [];

  constructor(private interventoService: InterventoService) { }

  ngOnInit(): void {
    this.loadInterventi();  // Carica gli interventi all'inizializzazione del componente
  }

  // Carica tutti gli interventi
  loadInterventi(): void {
    this.interventoService.getInterventi().subscribe(
      data => this.interventi = data,
      error => console.error('Errore nel recupero degli interventi', error)
    );
  }

  // Elimina un intervento
  deleteIntervento(id: number): void {
    if (confirm('Sei sicuro di voler eliminare questo intervento?')) {
      this.interventoService.deleteIntervento(id).subscribe(() => {
        this.loadInterventi();  // Ricarica la lista degli interventi dopo l'eliminazione
      });
    }
  }
}
