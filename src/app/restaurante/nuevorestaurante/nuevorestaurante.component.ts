import { Component, OnInit } from '@angular/core';
import { Restaurante } from 'src/app/Interfaces/restaurante.interface';
import { RestauranteService } from '../restaurante.service';

@Component({
  selector: 'app-nuevorestaurante',
  templateUrl: './nuevorestaurante.component.html',
  styleUrls: ['./nuevorestaurante.component.css']
})
export class NuevorestauranteComponent implements OnInit {

  constructor(private restauranteService: RestauranteService) { }

  ngOnInit(): void {
  }

  crearRestaurante(inputPlato: string,inputPrecio: number, inputFoto: string){
    const nuevoRestaurante: Restaurante = {
      id: 0,
      nombrePlato: inputPlato,
      precioPlato: inputPrecio,
      fotoRestaurante: inputFoto
    };

    this.restauranteService.agregarRestaurante(nuevoRestaurante);
  }

}
