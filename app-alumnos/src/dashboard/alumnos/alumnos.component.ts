import { FormGroup, FormBuilder, Validators, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { ErrorStateMatcher } from '@angular/material/core';
import { NuevoAlumno } from './alumnos.domain';



export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 15963123, name: 'Carlitos Tevez', weight: 38, symbol: 'apache@gmail.com'},
  {position: 15963123, name: 'Diego Maradona', weight: 60, symbol: 'El10go@gmail.com'},
  {position: 15963123, name: 'Lionel Messi', weight: 35, symbol: 'messias@gmail.com'},
  {position: 15963123, name: 'Roman Riquelme', weight: 38, symbol: 'juanRomanRiquelme@gmail.com'},
  {position: 15963123, name: 'Martin Palermo', weight: 38, symbol: 'locoPalermo@gmail.com'},
  {position: 15963123, name: 'Angel Di Maria', weight: 35, symbol: 'fideo@gmail.com'},
  {position: 15963123, name: 'Rolando Schiavi', weight: 45, symbol: 'elhachaSchiavi@gmail.com'},
  {position: 15963123, name: 'Hugo Ibarra', weight: 40, symbol: 'negritoIbarrra@gmail.com'},
  {position: 15963123, name: 'Roberto Abbondanzieri', weight: 50, symbol: 'elpaaato@gmail.com'},
];

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss']
})
export class AlumnosComponent implements OnInit {
  displayedColumns: string[] = ['demo-position', 'demo-name', 'demo-weight', 'demo-symbol', 'demo-action'];
  dataSource = ELEMENT_DATA;



  matcher = new MyErrorStateMatcher();

  @ViewChild(MatTable) table!: MatTable<PeriodicElement>

  public clickAgregar = false;
  public formNuevoAlumno!: FormGroup;


  constructor(private formBuilder: FormBuilder) {
    this.formNuevoAlumno = this.formBuilder.group({
      dni: new FormControl('', [Validators.required, Validators.minLength(7)]),
      nombre: new FormControl('', Validators.required),
      edad:new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email, Validators.pattern('^[a-z]+@[a-z]+\\.[a-z]{2,3}$')])
    });
    ;
   }

  ngOnInit(): void { }


  public borrar(ev: any) {
    for (let i = 0; i < this.dataSource.length; i++) {
      if (this.dataSource[i].name === ev) {
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
    nuevoAlumno.position = this.formNuevoAlumno.get('dni')?.getRawValue();
    nuevoAlumno.name = this.formNuevoAlumno.get('nombre')?.getRawValue();
    nuevoAlumno.weight = this.formNuevoAlumno.get('edad')?.getRawValue();
    nuevoAlumno.symbol = this.formNuevoAlumno.get('email')?.getRawValue();
    if (nuevoAlumno) {
      this.dataSource.push(nuevoAlumno);
      this.table.renderRows();
      this.clickAgregar = false;
    }
    else {
      alert('Completa todos los campos por favor');
    }
  }

  public modificarAlumno(element: PeriodicElement) {
    this.formNuevoAlumno.setValue(element);
    this.clickAgregar = true;

  }
}
