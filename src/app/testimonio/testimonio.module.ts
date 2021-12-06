import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaTestimonioComponent } from './lista-testimonio/lista-testimonio.component';
import { NuevotestimonioComponent } from './nuevotestimonio/nuevotestimonio.component';




@NgModule({
  declarations: [
    ListaTestimonioComponent,
    NuevotestimonioComponent,


  ],
  imports: [
    CommonModule
  ]
})
export class TestimonioModule { }
