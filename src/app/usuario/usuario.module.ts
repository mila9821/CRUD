import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListausuarioComponent } from './listausuario/listausuario.component';
import { NuevousuarioComponent } from './nuevousuario/nuevousuario.component';
import { UsuarioeditarComponent } from './usuarioeditar/usuarioeditar.component';



@NgModule({
  declarations: [
    ListausuarioComponent,
    NuevousuarioComponent,
    UsuarioeditarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UsuarioModule { }
