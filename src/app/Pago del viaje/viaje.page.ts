import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router ,NavigationExtras} from '@angular/router';
import { ToastController } from '@ionic/angular';
import randomInteger from 'random-int';
import { Viaje } from '../interfaces/viaje';
import { FbCarreraService } from '../services/FbCarrera/fb-carrera.service';




@Component({
  selector: 'app-viaje',
  templateUrl: './viaje.page.html',
  styleUrls: ['./viaje.page.scss'],
})

export class ViajePage implements OnInit {

  newViaje: Viaje={
    precio:0,
    kmString2:'',
    km:0,
    lat1:0,
    lat2:0,
    lng1:0,
    lng2:0,
    startAddress:'',
    endAddress:'',
    fecha:'',
    id:this.database.getId(),
};

    preciob:number;
    kmString2b:string;
    kmb:number;
    lat1b:number;
    lat2b:number;
    lng1b:number;
    lng2b:number;
    startAddressb:string;
    endAddressb:string;
    fechab:string;
    
 
  private path='carrera/';
  
  
  r=randomInteger(1000, 2000);
  

  constructor(private activeRoute: ActivatedRoute,private router: Router,public toastController: ToastController,private database:FbCarreraService) {

    this.activeRoute.queryParams.subscribe(params=>{
      if(this.router.getCurrentNavigation().extras.state){
        this.preciob=this.router.getCurrentNavigation().extras.state['precio'];
        this.kmString2b=this.router.getCurrentNavigation().extras.state['kmString2this'];
        this.kmb=this.router.getCurrentNavigation().extras.state['km'];
        this.lat1b=this.router.getCurrentNavigation().extras.state['lat1'];
        this.lat2b=this.router.getCurrentNavigation().extras.state['lat2'];
        this.lng1b=this.router.getCurrentNavigation().extras.state['lng1'];
        this.lng2b=this.router.getCurrentNavigation().extras.state['lng2'];
        this.startAddressb=this.router.getCurrentNavigation().extras.state['startAddress'];
        this.endAddressb=this.router.getCurrentNavigation().extras.state['endAddress'];
        this.fechab=this.router.getCurrentNavigation().extras.state['fecha'];
        console.log(this.preciob);
        
      }
    })
   }
  

  ngOnInit() {
    
  }
  
  aceptar(){
    this.newViaje.precio=this.preciob;
    this.newViaje.km=this.kmb;
    this.newViaje.lat1=this.lat1b;
    this.newViaje.lat2=this.lat2b;
    this.newViaje.lng1=this.lng1b;
    this.newViaje.lng2=this.lng2b;
    this.newViaje.startAddress=this.startAddressb;
    this.newViaje.endAddress=this.endAddressb;  
    this.newViaje.fecha=this.fechab;

    if (this.newViaje.precio!=0 && this.newViaje.km!=0 && this.newViaje.lat1!=0 &&
      this.newViaje.lat2!=0 && this.newViaje.lng1!=0 && this.newViaje.lng2 != 0 && this.newViaje.startAddress!='' && this.newViaje.endAddress!='') {
      
      this.database.crearDoc(this.newViaje,this.path,this.newViaje.id);
      this.router.navigate(['/home']);
      
      this.toastController.create({
        message: "Viaje guardado"
      }).then((loading)=>{
        loading.present();
        setTimeout(()=>{
        loading.dismiss();
        },3000)
      })
      
    } else {
      this.toastController.create({
        message: "No se puede guardar el viaje"
      }).then((loading)=>{
        loading.present();
        setTimeout(()=>{
        loading.dismiss();
        },3000)
      })
      
    }



    

  }
  viajes(){
    this.router.navigate(['/cmp2']);
  }

  salir(){
    this.router.navigate(['/home']);
  }
  
}
