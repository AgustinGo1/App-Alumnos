import { Estudiante } from './../models/estudiantes.domain';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstudiantesService {

  public estudiantes: Estudiante[] = [
    {nombre: 'Carlitos' , apellido:  'Tevez', usuario: 'apache@gmail.com', contrasena: '123456789'},
    {nombre: 'Diego' , apellido:  'Maradona', usuario: 'el10go@gmail.com', contrasena: '123456789'},
    {nombre: 'Carlos' , apellido:  'Bilardo', usuario: 'dtbilardo@gmail.com', contrasena: '123456789'},
    {nombre: 'Martin' , apellido:  'Palermo', usuario: 'elloco@gmail.com', contrasena: '123456789'},
    {nombre: 'Juan Roman' , apellido:  'Riquelme', usuario: 'roman10@gmail.com', contrasena: '123456789'},
    {nombre: 'Rolando' , apellido:  'Schiavi', usuario: 'hachaschiavi@gmail.com', contrasena: '123456789'},
  ];

  constructor() { }

  obtenerEstudiantes(): Observable<Estudiante[]> {
    return new BehaviorSubject<Estudiante[]>(this.estudiantes);
  }
}
