import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
  usuario = {
    username: '',
    password: ''
  }

  constructor(private router: Router, private alertController: AlertController) { }

  ngOnInit() { }

  onSumbit() {
    if (this.usuario.username == "admin" && this.usuario.password == "admin") {
      console.log("Usuario válido");

      // Almacenar el usuario en localStorage
      localStorage.setItem('usuario', JSON.stringify(this.usuario));

      let navigationExtras: NavigationExtras = {
        state: {
          usr: this.usuario
        }
      };
      this.router.navigate(['/home'], navigationExtras);
    } else {
      console.log("Acceso denegado");
      this.presentAlert();
    }
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Acceso Denegado',
      subHeader: '',
      message: 'Usuario y/o contraseña Incorrectos',
      buttons: [
        {
          text: 'Aceptar',
          role: 'cancelar',
          handler: () => {
            console.log('Alert canceled');
          },
        },
      ],
      backdropDismiss: false
    });
    await alert.present();
  }
}
