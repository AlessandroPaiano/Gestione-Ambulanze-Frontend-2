import { Component, OnInit } from '@angular/core';
import { TurnoService } from '../turno.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Turno } from '../turno.model';

@Component({
  selector: 'app-turno-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  turno: Turno = { utenteId: 0, dataInizio:new Date() , dataFine:new Date(), tipoTurno: 'MATTINA', stato: 'ASSEGNATO' };

  constructor(
    private turnoService: TurnoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.loadTurno(+id);  // Carica i dettagli del turno se un ID è presente nella route
    }
  }

  // Carica un turno per ID
  loadTurno(id: number): void {
    this.turnoService.getTurno(id).subscribe(
      data => this.turno = data,
      error => console.error('Errore nel caricamento del turno', error)
    );
  }

  // Salva o aggiorna il turno
  saveTurno(): void {
    this.turnoService.saveTurno(this.turno).subscribe(
      () => this.router.navigate(['/turni']),  // Ritorna alla lista dei turni dopo il salvataggio
      error => console.error('Errore nel salvataggio del turno', error)
    );
  }
}
