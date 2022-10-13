import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  public formSignup!: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private router: Router) { }

  ngOnInit(): void {
    this.formSignup = this.formBuilder.group({
      usuario: ['',
        [
          Validators.required,
        ]
      ],
      email: ['',
        Validators.required,
      ],
      contraseña:['',
        Validators.required,
        Validators.minLength(8)
      ],
      contraseña2: ['',
        Validators.required,
      ]
    });
  }


  public iniciarSesion() {
    console.log('inicie sesion jeje');
    this.router.navigateByUrl('/dashboard');
  }


}

