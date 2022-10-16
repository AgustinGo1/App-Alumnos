import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

export class NuevoAlumno  {
  name!: string;
  position!: number;
  weight!: number;
  symbol!: string;
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

  @ViewChild(MatTable) table!: MatTable<PeriodicElement>

  public clickAgregar = false;
  public formNuevoAlumno!: FormGroup;
  public dni!: number;
  public nombre!: string;
  public edad!: number;
  public email!:string;


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formNuevoAlumno = this.formBuilder.group({
      dni: ['',
        [
          Validators.required,
        ]
      ],
      nombre: ['',
        Validators.required,
      ],
      edad:['',
        Validators.required,
      ],
      email: ['',
        Validators.required,
      ]
    });
  }


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
    nuevoAlumno.position = this.dni;
    nuevoAlumno.name = this.nombre;
    nuevoAlumno.weight = this.edad;
    nuevoAlumno.symbol = this.email;
    this.dataSource.push(nuevoAlumno);
    this.table.renderRows();
  }
}
