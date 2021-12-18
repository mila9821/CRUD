import { Component, OnInit } from '@angular/core';
import { DetalleReserva } from 'src/app/Interfaces/detalleReserva.interface';
import { DetallereservaService } from '../detallereserva.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-nuevodetallereserva',
  templateUrl: './nuevodetallereserva.component.html',
  styleUrls: ['./nuevodetallereserva.component.css']
})
export class NuevodetallereservaComponent implements OnInit {

  constructor(private detalleService: DetallereservaService) { }

  ngOnInit(): void {
  }

  crearDetalle(inputPrecio: number,inputAdelanto: number,inputDias: number, inputIngreso: Date | null,inputSalida: Date | null){
    const nuevoDetalle: DetalleReserva = {
      id: 0,
      ingreso: inputIngreso,
      salida: inputSalida,
      precio: inputPrecio,
      adelanto: inputAdelanto,
      dias: inputDias

    };

    this.detalleService.agregarDetalle(nuevoDetalle);
  }

}
