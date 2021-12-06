import { Component, OnInit } from '@angular/core';
import { TestimonioService } from '../testimonio.service';

@Component({
  selector: 'app-lista-testimonio',
  templateUrl: './lista-testimonio.component.html',
  styleUrls: ['./lista-testimonio.component.css']
})
export class ListaTestimonioComponent implements OnInit {

  constructor(private testimonioService: TestimonioService) { 
    this.testimonioService.listarTestimonio();
  }

  ngOnInit(): void {
  }

  get listaTestimonio(){
    
    return this.testimonioService.lista;
  }

}
