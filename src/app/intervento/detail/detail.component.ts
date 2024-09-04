import { Component, OnInit } from '@angular/core';
import { InterventoService } from '../intervento.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Intervento } from '../intervento.model';

@Component({
  selector: 'app-intervento-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  intervento: Intervento = { ambulanzaId: 0, utenteId: 0, dataOra: new Date(), descrizione: '', priorita: 'MEDIA', stato: 'PENDING' };

  constructor(
    private interventoService: InterventoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.loadIntervento(+id);  // Carica i dettagli dell'intervento se un ID è presente nella route
    }
  }

  // Carica un intervento per ID
  loadIntervento(id: number): void {
    this.interventoService.getIntervento(id).subscribe(
      data => this.intervento = data,
      error => console.error('Errore nel caricamento dell\'intervento', error)
    );
  }

  // Salva o aggiorna l'intervento
  saveIntervento(): void {
    this.interventoService.saveIntervento(this.intervento).subscribe(
      () => this.router.navigate(['/interventi']),  // Ritorna alla lista degli interventi dopo il salvataggio
      error => console.error('Errore nel salvataggio dell\'intervento', error)
    );
  }
}
