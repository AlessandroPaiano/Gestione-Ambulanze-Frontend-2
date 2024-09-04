import { Component, OnInit } from '@angular/core';
import { AmbulanzaService } from '../ambulanza.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Ambulanza } from '../ambulanza.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  ambulanza: Ambulanza = { numeroVeicolo: '', stato: 'DISPONIBILE' };

  constructor(
    private ambulanzaService: AmbulanzaService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.loadAmbulanza(+id);  // Carica i dettagli dell'ambulanza se un ID è presente nella route
    }
  }

  // Carica un'ambulanza per ID
  loadAmbulanza(id: number): void {
    this.ambulanzaService.getAmbulanza(id).subscribe(
      data => this.ambulanza = data,
      error => console.error('Errore nel caricamento dei dettagli dell\'ambulanza', error)
    );
  }

  // Salva o aggiorna l'ambulanza
  saveAmbulanza(): void {
    this.ambulanzaService.saveAmbulanza(this.ambulanza).subscribe(
      () => this.router.navigate(['/ambulanze']),  // Ritorna alla lista delle ambulanze
      error => console.error('Errore nel salvataggio dell\'ambulanza', error)
    );
  }
}
