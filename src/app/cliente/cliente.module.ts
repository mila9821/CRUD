import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaclienteComponent } from './listacliente/listacliente.component';
import { NuevoclienteComponent } from './nuevocliente/nuevocliente.component';
import { EditarclienteComponent } from './editarcliente/editarcliente.component';



@NgModule({
  declarations: [
    ListaclienteComponent,
    NuevoclienteComponent,
    EditarclienteComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ClienteModule { }
