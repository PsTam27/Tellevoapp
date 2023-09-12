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
      localStorage.setItem('usuario', this.usuario.username);

    
      let navigationExtras: NavigationExtras = {
        state: {
          usr: this.usuario.username
        }
      };
      this.router.navigate(['/profile'], navigationExtras);
    } else if (this.usuario.username == "otroUsuario" && this.usuario.password == "otraContraseña") {
      console.log("Otro usuario válido");
    
      // Hacer algo para otro usuario válido aquí
    
    } else if (this.usuario.username == "nicolas" && this.usuario.password == "Nicolas") {
      console.log("Usuario nicolas válido");
    
      // Almacenar el usuario en localStorage
      localStorage.setItem('usuario', JSON.stringify(this.usuario));
    
      let navigationExtras: NavigationExtras = {
        state: {
          usr: this.usuario.username
        }
      };
      this.router.navigate(['/profile'], navigationExtras);
    } else if (this.usuario.username == "Pia" && this.usuario.password == "Pia") {
      console.log("Usuario Pia válido");
    
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
