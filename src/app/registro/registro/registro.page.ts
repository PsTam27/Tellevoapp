import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { UsuarioService } from "../../services/usuario/usuario.service";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import {FirebaseErrorService} from "../../services/firebase-error/firebase-error.service";


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {


  public data: Array<any> = [];
  public u: string;
  public user: Array<any> = [];
  formularioReg: FormGroup;

  constructor(
    private fireError: FirebaseErrorService,
    private afAuth: AngularFireAuth,
    public servicio: UsuarioService, public alertController: AlertController, public fb: FormBuilder, public toastController: ToastController, public router: Router) {
    this.formularioReg = new FormGroup({
      "email": new FormControl(),
      "password": new FormControl(),
      
    })
  }

  async registrarse() {
    this.servicio.register(this.formularioReg.value)
    .then(response => {
      console.log(response);
      this.toastController.create({
        message: "USUARIO REGISTRADO"
      }).then((loading)=>{
        loading.present();
        setTimeout(()=>{
        loading.dismiss();
        },3000)
      })
      this.router.navigate(['/login'])
    })
    .catch(async e => {
        console.log(e)
        let alerta = await this.alertController.create({
          header: "Error",
          message: this.fireError.codeError(e.code),
          buttons: ['OK']
        });
        alerta.present();
      });
  }

  

  irLog() {
    this.router.navigate(['/login'])
  }

  ngOnInit() {

  }

  ionVieWillEnter() {
    

  }

}
