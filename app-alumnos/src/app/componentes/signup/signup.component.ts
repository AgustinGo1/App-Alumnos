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
  public password!: string;
  public usuario!: string;

  constructor(private formBuilder: FormBuilder,
              private router: Router) { }

  ngOnInit(): void {
    this.formSignup = this.formBuilder.group({
      email: ['',
        Validators.required,
      ],
      contraseña:['',
       [
         Validators.required,
         Validators.minLength(8)
       ]
      ],

    });
  }


  public iniciarSesion() {
    localStorage.setItem(this.usuario, this.password);
    this.router.navigateByUrl('/dashboard');
  }


}

