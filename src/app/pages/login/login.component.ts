import { Component, } from '@angular/core';
import {
  trigger,
  style,
  animate,
  transition
} from '@angular/animations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  
})
export class LoginComponent {
  mostrar: boolean = false;
  loginForm: FormGroup;

  constructor(private FormBuilder: FormBuilder) {
    this.loginForm = this.FormBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  toggle() {
    this.mostrar = !this.mostrar;
  }
  closeModal() {
    this.mostrar = false;
  }

  loginTutor() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
    } else {
      console.log('Formulário inválido');
    }
  }

  loginStudent() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
    } else {
      console.log('Formulário inválido');
    }
  }
}