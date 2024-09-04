import { Component, OnInit } from '@angular/core';
import { GestioneAmbulanze } from '../models/gestione-ambulanze';
import { AmbulanzaDisponibile } from '../models/ambulanza-disponibile';
import { AmbulanzaInManutenzione } from '../models/ambulanza-in-manutenzione';

@Component({
  selector: 'app-gestione-ambulanze',
  templateUrl: './gestione-ambulanze.component.html',
  styleUrls: ['./gestione-ambulanze.component.css']
})
export class GestioneAmbulanzeComponent implements OnInit {

  ambulanze: GestioneAmbulanze[] = [];  // Array polimorfico di ambulanze

  constructor() {}

  ngOnInit(): void {
    // Aggiungiamo diverse ambulanze al nostro array
    this.ambulanze.push(new AmbulanzaDisponibile(1, 'DISPONIBILE'));
    this.ambulanze.push(new AmbulanzaInManutenzione(2, 'IN_MANUTENZIONE'));
    this.ambulanze.push(new AmbulanzaDisponibile(3, 'DISPONIBILE'));
  }

  // Metodo per gestire le ambulanze
  gestisciAmbulanza(ambulanza: GestioneAmbulanze): void {
    ambulanza.gestisci();  // Il metodo `gestisci` sarà eseguito polimorficamente
  }
}
