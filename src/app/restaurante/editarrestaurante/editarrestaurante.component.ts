import { Component, OnInit } from '@angular/core';
import { Restaurante } from 'src/app/Interfaces/restaurante.interface';
import { RestauranteService } from '../restaurante.service';

@Component({
  selector: 'app-editarrestaurante',
  templateUrl: './editarrestaurante.component.html',
  styleUrls: ['./editarrestaurante.component.css']
})
export class EditarrestauranteComponent implements OnInit {

  constructor(private restauranteser : RestauranteService) { }

  ngOnInit(): void {
  }

  editarRestaurante(inputPlato: string,inputPrecio: number, inputFoto: string){
    const editarRestaurante: Restaurante = {
      id: 0,
      nomPlato: inputPlato,
      precioPlato: inputPrecio,
      foto: inputFoto,
    };

    this.restauranteser.editarRestaurante(1, editarRestaurante);
  }

}
