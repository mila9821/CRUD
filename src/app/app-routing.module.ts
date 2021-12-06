import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BlankComponent } from './shared/blank/blank.component';
import { ListausuarioComponent } from './usuario/listausuario/listausuario.component';
import { ListaTestimonioComponent } from './testimonio/lista-testimonio/lista-testimonio.component';
import { ListaRestauranteComponent } from './restaurante/lista-restaurante/lista-restaurante.component';
import { ListahabitacionComponent } from './habitacion/listahabitacion/listahabitacion.component';
import { ListadetallereservaComponent } from './detallereserva/listadetallereserva/listadetallereserva.component';
import { ListaclienteComponent } from './cliente/listacliente/listacliente.component';
import { NuevousuarioComponent } from './usuario/nuevousuario/nuevousuario.component';

const routes: Routes = [
  {
    path: '',
    component: BlankComponent,
    pathMatch: 'full'
  },
  {
    path: 'usuario',
    component: ListausuarioComponent,
    pathMatch: 'full'
  },
  {
    path: 'usuario/nuevousuario',
    component: NuevousuarioComponent,
    pathMatch: 'full'
  },
  {
    path: 'testimonio',
    component: ListaTestimonioComponent,
    pathMatch: 'full'
  },
  {
    path: 'restaurante',
    component: ListaRestauranteComponent,
    pathMatch: 'full'
  },
  {
    path: 'habitacion',
    component: ListahabitacionComponent,
    pathMatch: 'full'
  },
  {
    path: 'detallereserva',
    component: ListadetallereservaComponent,
    pathMatch: 'full'
  },
  {
    path: 'cliente',
    component: ListaclienteComponent,
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
