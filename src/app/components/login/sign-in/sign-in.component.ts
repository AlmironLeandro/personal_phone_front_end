import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {

  public email = new FormControl('', [Validators.required, Validators.email]);
  public password = new FormControl('', Validators.required)

  ingresar = () => {
    alert('Ingresar')
  }
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'El email es requerido';
    }

    return this.email.hasError('email') ? `El email no es valido` : '';

  }

  getErrorMessagePassword() {
    return this.password.hasError('required') ? `El password es requerido` : '';
  }

}
