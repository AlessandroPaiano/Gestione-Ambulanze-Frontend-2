import { Component, OnInit } from '@angular/core';
import { TurnoService } from '../turno.service';
import { Turno } from '../turno.model';

@Component({
  selector: 'app-turno-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  turni: Turno[] = [];

  constructor(private turnoService: TurnoService) { }

  ngOnInit(): void {
    this.loadTurni();  // Carica i turni all'inizializzazione del componente
  }

  // Carica tutti i turni
  loadTurni(): void {
    this.turnoService.getTurni().subscribe(
      data => this.turni = data,
      error => console.error('Errore nel recupero dei turni', error)
    );
  }

  // Elimina un turno
  deleteTurno(id: number): void {
    if (confirm('Sei sicuro di voler eliminare questo turno?')) {
      this.turnoService.deleteTurno(id).subscribe(() => {
        this.loadTurni();  // Ricarica la lista dei turni dopo l'eliminazione
      });
    }
  }
}
