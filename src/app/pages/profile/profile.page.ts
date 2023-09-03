import { Component, OnInit } from '@angular/core';

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

  constructor() {}

  ngOnInit() {
    // Recuperar el nombre de usuario de localStorage
    const storedUsername = localStorage.getItem('usuario');

    if (storedUsername) {
      // Si se encontró un nombre de usuario en localStorage, asignarlo a la variable 'usuario'
      this.usuario.nombre = storedUsername;
    }
  }
}
