import { Curso } from './../../../models/cursos.domain';
import { CursosService } from './../../../servicios/cursos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  public cursos!: Curso[];

  constructor(private cursosSrv: CursosService) { }

  ngOnInit(): void {
    this.cursos = this.cursosSrv.obtenerCursos();
  }

}
