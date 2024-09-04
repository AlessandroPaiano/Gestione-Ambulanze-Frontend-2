import { Component, OnInit } from '@angular/core';
import { Notifica } from '../models/notifica';  // Importiamo l'interfaccia Notifica
import { NotificaIntervento } from '../models/notifica-intervento';  // Importiamo la classe NotificaIntervento
import { NotificaTurno } from '../models/notifica-turno';  // Importiamo la classe NotificaTurno

@Component({
  selector: 'app-notifiche',
  templateUrl: './notifiche.component.html',
  styleUrls: ['./notifiche.component.css']
})
export class NotificheComponent implements OnInit {

  notifiche: Notifica[] = [];  // Array di notifiche polimorfiche

  constructor() {}

  ngOnInit(): void {
  }

    // Metodo che gestisce le notifiche in modo polimorfico
    gestisciNotifica(notifica: Notifica): void {
      console.log(notifica.getMessaggio());
      // Ulteriori operazioni specifiche potrebbero essere implementate qui
    }
  
}
