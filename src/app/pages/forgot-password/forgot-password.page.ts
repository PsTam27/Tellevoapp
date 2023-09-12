import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage {

  constructor(private navCtrl: NavController) { }

  volver() {
    this.navCtrl.back(); // Esto volverá a la página anterior en la pila de navegación
  }
}
