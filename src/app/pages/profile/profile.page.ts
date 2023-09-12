import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular'; // Asegúrate de importar NavController si estás utilizando Ionic 4 o superior

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})

export class ProfilePage implements OnInit {
  usuario = {
    nombre: '', // Inicializar con una cadena vacía
    correo: '',
    tieneAuto: false, // Valor inicial
  };

  constructor(private navCtrl: NavController) {}

  ngOnInit() {
    // Recuperar el nombre de usuario de localStorage
    const storedUsername = localStorage.getItem('usuario');

    if (storedUsername) {
      // Si se encontró un nombre de usuario en localStorage, asignarlo a la variable 'usuario'
      this.usuario.nombre = storedUsername;
    }
  }
  
  // Función para mostrar notificaciones
  showNotifications() {
    // Implementa la lógica para mostrar notificaciones aquí
  }

  // Función para regresar atrás
  goBack() {
    this.navCtrl.back();
  }

  // Función para cerrar sesión
  logout() {
    // Realiza cualquier lógica de cierre de sesión que sea necesaria, como limpiar datos de sesión, etc.
    
    // Luego, redirige al usuario a la página de inicio de sesión u otra página apropiada.
    this.navCtrl.navigateRoot(['/login']); // Reemplaza '/login' con la ruta a tu página de inicio de sesión.
  }
}
