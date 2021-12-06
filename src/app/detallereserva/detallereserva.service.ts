import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DetalleReserva } from '../Interfaces/detalleReserva.interface';

@Injectable({
  providedIn: 'root'
})
export class DetallereservaService {

  constructor(private http: HttpClient) { }

  public lista: DetalleReserva[] = [];

  // hace una lista desde interfaces usuario
  listarDetalle(){
    this.http.get<DetalleReserva[]>('http://127.0.0.1:8080/api/usuarios')
    .subscribe((respuesta: any) => {
      this.lista = respuesta;
    });
  }

}
