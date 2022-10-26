import { EstudiantesService } from './../../app/servicios/estudiantes.service';
import { Estudiante } from './../../app/models/estudiantes.domain';
import { FormGroup, FormBuilder, Validators, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { ErrorStateMatcher } from '@angular/material/core';
import { NuevoAlumno } from './../../app/models/estudiantes.domain';



// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss']
})
export class AlumnosComponent implements OnInit {
  displayedColumns: string[] = ['demo-nombre', 'demo-apellido', 'demo-usuario', 'demo-action'];
  dataSource: Estudiante[] = [];



  matcher = new MyErrorStateMatcher();

  @ViewChild(MatTable) table!: MatTable<Estudiante>

  public clickAgregar = false;
  public formNuevoAlumno!: FormGroup;
  public formModificarAlm!: FormGroup;
  public actulizarAlum = false


  constructor(private formBuilder: FormBuilder,
              private estuadiantesSrv: EstudiantesService) {
    this.formNuevoAlumno = this.formBuilder.group({
      nombre: new FormControl('', [Validators.required]),
      apellido: new FormControl('', Validators.required),
      usuario:new FormControl('', [Validators.required,Validators.pattern('^[a-z]+@[a-z]+\\.[a-z]{2,3}$')]),
      //email: new FormControl('', [Validators.required, Validators.email, Validators.pattern('^[a-z]+@[a-z]+\\.[a-z]{2,3}$')])
    });
   }

  ngOnInit(): void {
    this.estuadiantesSrv.obtenerEstudiantes().subscribe(d => {
      this.dataSource = d;
    })
  }


  public borrar(ev: any) {
    console.log('entro', ev);

    for (let i = 0; i < this.dataSource.length; i++) {
      if (this.dataSource[i].nombre === ev) {
        this.dataSource.splice(i,1);
        this.table.renderRows();
      }
    }
  }

  public agregarAlumno() {
    this.clickAgregar = true;
  }

  public guardarAlumno() {
    const nuevoAlumno = new NuevoAlumno ();
    nuevoAlumno.nombre = this.formNuevoAlumno.get('nombre')?.getRawValue();
    nuevoAlumno.apellido = this.formNuevoAlumno.get('apellido')?.getRawValue();
    nuevoAlumno.usuario = this.formNuevoAlumno.get('usuario')?.getRawValue();
    //nuevoAlumno.contrasena = this.formNuevoAlumno.get('email')?.getRawValue();
    if (nuevoAlumno) {
      this.dataSource.push(nuevoAlumno);
      this.table.renderRows();
      this.clickAgregar = false;
    }
    else {
      alert('Completa todos los campos por favor');
    }
  }

  public modificarAlumno(element: any) {
    this.actulizarAlum = true;
    this.formModificarAlm = this.formBuilder.group({
      nombre: new FormControl(element.nombre, [Validators.required]),
      apellido: new FormControl(element.apellido , Validators.required),
      //usuario:new FormControl(element.usuario , [Validators.required, Validators.pattern('^[a-z]+@[a-z]+\\.[a-z]{2,3}$')]),
      //email: new FormControl(element.symbol , [Validators.required, Validators.email, Validators.pattern('^[a-z]+@[a-z]+\\.[a-z]{2,3}$')])
    });
  }

  public actualizarAlumno (ev: any) {
    console.log('entro', ev);

    this.dataSource.forEach((d) => {
      if(d.usuario === ev.usuario){
        d.apellido = ev.apellido;
        d.nombre = ev.nombre;
        // d.contrasena = ev.email;
      }
    })
    this.table.renderRows();
    this.actulizarAlum = false;
  }

}
