import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  public email = String(localStorage.getItem("email"));
  public ciudad: string = '';
  public sede: string = '';
  public horario: string[] = [];


  constructor(
    private router:Router,
    private afAuth: AngularFireAuth
  ) {

  }

  ngOnInit() {

  }

  eliminarUsuario(){

  }

  logOut(){
    localStorage.clear();
    this.afAuth.signOut().then(()=>{
      this.router.navigate(['/login'])
    });
  }

  horarioSeleccionado(event: any) {
    this.horario = event.detail.value;
  }

}
