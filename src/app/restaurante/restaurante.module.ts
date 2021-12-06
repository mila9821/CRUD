import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaRestauranteComponent } from './lista-restaurante/lista-restaurante.component';
import { NuevorestauranteComponent } from './nuevorestaurante/nuevorestaurante.component';



@NgModule({
  declarations: [
    ListaRestauranteComponent,
    NuevorestauranteComponent
  ],
  imports: [
    CommonModule
  ]
})
export class RestauranteModule { }
