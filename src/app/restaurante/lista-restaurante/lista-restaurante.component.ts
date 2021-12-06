import { Component, OnInit } from '@angular/core';
import { RestauranteService } from '../restaurante.service';

@Component({
  selector: 'app-lista-restaurante',
  templateUrl: './lista-restaurante.component.html',
  styleUrls: ['./lista-restaurante.component.css']
})
export class ListaRestauranteComponent implements OnInit {

  constructor(private restauranteService: RestauranteService) { 
    this.restauranteService.listarRestaurante();
  }

  ngOnInit(): void {
  }

  get listaRestaurante(){
    
    return this.restauranteService.lista;
  }

}
