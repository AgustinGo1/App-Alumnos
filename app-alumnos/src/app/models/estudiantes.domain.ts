export interface Estudiante{
  nombre: string;
  apellido: string;
  usuario: string;
  contrasena: string;
}

export class NuevoAlumno implements Estudiante  {
  nombre!: string;
  apellido!: string;
  usuario!: string;
  contrasena!: string;
}
