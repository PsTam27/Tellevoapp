import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  frmreg: FormGroup; // Definición del formulario
  isFormValid = false; // Propiedad para controlar la validez del formulario

  constructor(private navCtrl: NavController, private formBuilder: FormBuilder) {
    // Configuración del formulario y validador personalizado
    this.frmreg = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
    }, { validator: this.passwordMatchValidator('password', 'confirmPassword') });
  }

  volver() {
    this.navCtrl.back(); // Esto volverá a la página anterior en la pila de navegación
  }
  onSubmit() {
    // Manejo del envío del formulario
    if (this.frmreg.valid) {
      const formData = this.frmreg.value;
      console.log('Formulario válido, datos enviados:', formData);
    } else {
      console.log('Formulario inválido, revisa los campos.');
    }
  }

  // Función que crea el validador personalizado para verificar que las contraseñas coincidan
  passwordMatchValidator(passwordKey: string, confirmPasswordKey: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const password = control.get(passwordKey)?.value;
      const confirmPassword = control.get(confirmPasswordKey)?.value;

      if (password !== confirmPassword) {
        return { passwordMismatch: true };
      }

      return null; // La validación es exitosa, no hay errores
    };
  }
}
