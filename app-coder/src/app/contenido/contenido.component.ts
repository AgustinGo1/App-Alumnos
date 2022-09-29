import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.scss']
})
export class ContenidoComponent implements OnInit {

  listaAlumnos = ['Pedro', 'Agustin', 'Andres', 'Jorge', 'Mariano', 'Roberto', 'Lucas', 'Luciano'];
  listaVisualizados: any = [];

  public alm: string = '';
  public visto: boolean = false;


  constructor() { }

  ngOnInit() {

  }

  public AddAlumno () {
    if(this.listaAlumnos.length > 0){
      this.alm = this.listaAlumnos[0];
      this.listaVisualizados.push(this.alm);
      this.listaAlumnos.shift();
      if(this.listaVisualizados.length > 0){
        this.visto = true;
      }

    }
  }

}
