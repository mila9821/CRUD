import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Restaurante } from '../Interfaces/restaurante.interface';

@Injectable({
  providedIn: 'root'
})
export class RestauranteService {

  constructor(private http: HttpClient) { }

  public lista: Restaurante[] = [];

  // hace una lista desde interfaces usuario
  listarUsuario(){
    this.http.get<Restaurante[]>('http://127.0.0.1:8080/api/usuarios')
    .subscribe((respuesta: any) => {
      this.lista = respuesta;
    });
  }

}
