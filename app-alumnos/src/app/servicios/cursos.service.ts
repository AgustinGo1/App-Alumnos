import { Curso } from './../models/cursos.domain';
import { Injectable } from '@angular/core';
import { formatDate } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  format: string = 'dd/MM/yyyy'


  public cursos: Curso[] = [{
    nombre!: 'angular',
    comision!: 'a',
    profesor!: 'carlos',
    fechaInicio!: formatDate(new Date().toISOString(), this.format, 'en-US'),
    fechaFin!: new Date(),
    inscripcionAbierta!:true,
    imagen: '',
    estudiantes: [{
      nombre: 'Agustin',
      apellido: 'Goñi',
      usuario: 'agus@gmail.com',
      contrasena: 'sfsfsfsfs'
    }]
  }, {
    nombre!: 'Node JS',
    comision!: 'a',
    profesor!: 'carlos',
    fechaInicio!: formatDate(new Date().toISOString(), this.format, 'en-US'),
    fechaFin!: new Date(),
    inscripcionAbierta!:true,
    imagen: '',
    estudiantes: [{
      nombre: 'Agustin',
      apellido: 'Goñi',
      usuario: 'agus@gmail.com',
      contrasena: 'sfsfsfsfs'
    }]
  }, {
    nombre!: 'Java spring boot',
    comision!: 'a',
    profesor!: 'carlos',
    fechaInicio!: formatDate(new Date().toISOString(), this.format, 'en-US'),
    fechaFin!: new Date(),
    inscripcionAbierta!:true,
    imagen: '',
    estudiantes: [{
      nombre: 'Agustin',
      apellido: 'Goñi',
      usuario: 'agus@gmail.com',
      contrasena: 'sfsfsfsfs'
    }]
  }, {
    nombre!: 'Vue JS',
    comision!: 'a',
    profesor!: 'carlos',
    fechaInicio!: formatDate(new Date().toISOString(), this.format, 'en-US'),
    fechaFin!: new Date(),
    inscripcionAbierta!:true,
    imagen: '',
    estudiantes: [{
      nombre: 'Agustin',
      apellido: 'Goñi',
      usuario: 'agus@gmail.com',
      contrasena: 'sfsfsfsfs'
    }]
  }, {
    nombre!: 'Phyton',
    comision!: 'a',
    profesor!: 'carlos',
    fechaInicio!: formatDate(new Date().toISOString(), this.format, 'en-US'),
    fechaFin!: new Date(),
    inscripcionAbierta!:true,
    imagen: '',
    estudiantes: [{
      nombre: 'Agustin',
      apellido: 'Goñi',
      usuario: 'agus@gmail.com',
      contrasena: 'sfsfsfsfs'
    }]
  }, {
    nombre!: 'React JS',
    comision!: 'a',
    profesor!: 'carlos',
    fechaInicio!: formatDate(new Date().toISOString(), this.format, 'en-US'),
    fechaFin!: new Date(),
    inscripcionAbierta!:true,
    imagen: '',
    estudiantes: [{
      nombre: 'Agustin',
      apellido: 'Goñi',
      usuario: 'agus@gmail.com',
      contrasena: 'sfsfsfsfs'
    }]
  }];

  constructor() { }

  obtenerCursos(): Curso[] {
    return this.cursos;
  }

  agregarCursos(curso: Curso){
    this.cursos.push(curso);
    return {message: 'ok'}
  }
}
