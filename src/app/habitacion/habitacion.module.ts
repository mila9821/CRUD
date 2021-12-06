import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListahabitacionComponent } from './listahabitacion/listahabitacion.component';
import { NuevohabitacionComponent } from './nuevohabitacion/nuevohabitacion.component';



@NgModule({
  declarations: [
    ListahabitacionComponent,
    NuevohabitacionComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HabitacionModule { }
