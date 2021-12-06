import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaclienteComponent } from './listacliente/listacliente.component';
import { NuevoclienteComponent } from './nuevocliente/nuevocliente.component';



@NgModule({
  declarations: [
    ListaclienteComponent,
    NuevoclienteComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ClienteModule { }
