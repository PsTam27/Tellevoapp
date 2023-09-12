import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular'; // Asegúrate de importar NavController si estás utilizando Ionic 4 o superior

import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.page.html',
  styleUrls: ['./pay.page.scss'],
})
export class PayPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  volver() {
    this.navCtrl.back(); // Esto volverá a la página anterior en la pila de navegación
  }
  
  // Función para cerrar sesión
  logout() {
    // Realiza cualquier lógica de cierre de sesión que sea necesaria, como limpiar datos de sesión, etc.
    
    // Luego, redirige al usuario a la página de inicio de sesión u otra página apropiada.
    this.navCtrl.navigateRoot(['/login']); // Reemplaza '/login' con la ruta a tu página de inicio de sesión.
  }
  
}


