import { Component, OnInit } from '@angular/core';
import { Testimonio } from 'src/app/Interfaces/testimonio.interface';
import { TestimonioService } from '../testimonio.service';

@Component({
  selector: 'app-nuevotestimonio',
  templateUrl: './nuevotestimonio.component.html',
  styleUrls: ['./nuevotestimonio.component.css']
})
export class NuevotestimonioComponent implements OnInit {

  constructor(private testimonioService: TestimonioService) { }

  ngOnInit(): void {
  }

  crearTestimonio(inputContenido: string,inputEstado: number){
    const nuevoTestimonio: Testimonio = {
      id: 0,
      contenido: inputContenido,
      estado: inputEstado
    };

    this.testimonioService.agregarTestimonio(nuevoTestimonio);
  }

}
