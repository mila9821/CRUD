import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Testimonio } from '../Interfaces/testimonio.interface';

@Injectable({
  providedIn: 'root'
})
export class TestimonioService {

  constructor(private http: HttpClient) { }

  public lista: Testimonio[] = [];

  // hace una lista desde interfaces usuario
  listarTestimonio(){
    this.http.get<Testimonio[]>('http://127.0.0.1:8080/api/testimonio')
    .subscribe((respuesta: any) => {
      this.lista = respuesta;
    });
  }

  agregarTestimonio(testimonio: Testimonio){
    this.http.post<any>('http://127.0.0.1:8080/api/testimonio', testimonio).subscribe();
  }

}
