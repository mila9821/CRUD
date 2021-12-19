import { Component, OnInit } from '@angular/core';
import { Testimonio } from 'src/app/Interfaces/testimonio.interface';
import { TestimonioService } from '../testimonio.service';

@Component({
  selector: 'app-editartestimonio',
  templateUrl: './editartestimonio.component.html',
  styleUrls: ['./editartestimonio.component.css']
})
export class EditartestimonioComponent implements OnInit {

  constructor(private testimonioSer : TestimonioService) { }

  ngOnInit(): void {
  }

  editarTestimonio(inputContenido: string,inputEstado: number){
    const editarTestimonio: Testimonio = {
      id: 0,
      contenido: inputContenido,
      estado: inputEstado
    };

    this.testimonioSer.editarTestimonio(1, editarTestimonio);
  }

}
