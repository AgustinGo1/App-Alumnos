import { Estudiante } from "./estudiantes.domain";

export class Curso{
    nombre!: string;
    comision!: string;
    profesor!: string;
    fechaInicio!: string;
    fechaFin!: Date;
    inscripcionAbierta!: boolean;
    imagen!: string;
    estudiantes!: Estudiante[];
}
