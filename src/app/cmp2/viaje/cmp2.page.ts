import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router ,NavigationExtras} from '@angular/router';
import { ToastController } from '@ionic/angular';
import randomInteger from 'random-int';
import { Viaje } from 'src/app/interfaces/viaje';
import { FbCarreraService } from 'src/app/services/FbCarrera/fb-carrera.service';
import { NavController } from '@ionic/angular';



@Component({
  selector: 'app-cmp2',
  templateUrl: './cmp2.page.html',
  styleUrls: ['./cmp2.page.scss'],
})

export class cmp2Page implements OnInit {
  viajes: Viaje[]=[];

  newViaje: Viaje={
    precio:null,
    kmString2:'',
    km:null,
    lat1:null,
    lat2:null,
    lng1:null,
    lng2:null,
    startAddress:'',
    endAddress:'',
    fecha:'',
    id:this.database.getId(),
};
  



  private path='carrera/';
  
  constructor(private activeRoute: ActivatedRoute,private router: Router,private database:FbCarreraService,public toastController: ToastController,private navCtrl: NavController) {

   
   }
  
  ionViewWillEnter(){
    
  }


  ngOnInit() {
    this.getViajes();
    
  }

  getViajes(){
    this.database.getCollection<Viaje>(this.path).subscribe(   res => {
        this.viajes =res;
    });

  }
  verDetalle(viaje: Viaje){
    this.navCtrl.navigateForward(['/detalle-viaje', viaje.id]);
  }
  

  salir(){
    this.router.navigate(['/home']);
  }
  
}
