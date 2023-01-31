import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {



  public email = new FormControl('', [Validators.required, Validators.email]);
  public password = new FormControl('', Validators.required)
  public rePassword = new FormControl('', Validators.required)

  enter = () => {
    console.log(this.password.value == this.rePassword.value && this.email.value != '');

  }
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'El email es requerido';
    }

    return this.email.hasError('email') ? `El email no es valido` : '';

  }

  getErrorMessagePassword() {
    return this.password.hasError('required') ? `La contraseña es requerida` : '';
  }


  validBothPass() {
    return (
      this.password.value === this.rePassword.value
      && this.password.value != '' 
      && this.email.value != '')
  }

}
