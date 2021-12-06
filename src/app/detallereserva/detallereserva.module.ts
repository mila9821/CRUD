import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadetallereservaComponent } from './listadetallereserva/listadetallereserva.component';
import { NuevodetallereservaComponent } from './nuevodetallereserva/nuevodetallereserva.component';



@NgModule({
  declarations: [
    ListadetallereservaComponent,
    NuevodetallereservaComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DetallereservaModule { }
