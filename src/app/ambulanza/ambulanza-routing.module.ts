import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
  { path: '', component: ListComponent },  // Lista delle ambulanze
  { path: 'detail/:id', component: DetailComponent }  // Dettagli di un'ambulanza
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AmbulanzaRoutingModule { }
