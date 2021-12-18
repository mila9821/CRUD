import { Component, OnInit } from '@angular/core';
import { DetalleReserva } from '../../Interfaces/detalleReserva.interface';
import { DetallereservaService } from '../detallereserva.service';

@Component({
  selector: 'app-editardetallereserva',
  templateUrl: './editardetallereserva.component.html',
  styleUrls: ['./editardetallereserva.component.css']
})
export class EditardetallereservaComponent implements OnInit {

  constructor(private detallereservaService: DetallereservaService) { }

  ngOnInit(): void {
  }

  editarDetalle(inputPrecio: number,inputAdelanto: number,inputDias: number, inputIngreso: Date | null,inputSalida: Date | null){
    const nuevoDetalle: DetalleReserva = {
      id: 0,
      ingreso: inputIngreso,
      salida: inputSalida,
      precio: inputPrecio,
      adelanto: inputAdelanto,
      dias: inputDias

    };

    this.detallereservaService.editarDetalle(2, nuevoDetalle);
  }

}
