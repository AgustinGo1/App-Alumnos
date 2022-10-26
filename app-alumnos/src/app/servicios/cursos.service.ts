import { Curso } from './../models/cursos.domain';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  public cursos: Curso[] = [];

  constructor() { }

  obtenerCursos(): Curso[] {
    return this.cursos;
  }

  llenarCursos(curso: Curso){
    this.cursos.push(curso);
    return {message: 'ok'}

  }
}
