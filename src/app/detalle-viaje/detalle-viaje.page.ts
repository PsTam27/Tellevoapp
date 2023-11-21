import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FbCarreraService } from 'src/app/services/FbCarrera/fb-carrera.service';
import { Viaje } from '../interfaces/viaje';

@Component({
  selector: 'app-detalle-viaje',
  templateUrl: './detalle-viaje.page.html',
  styleUrls: ['./detalle-viaje.page.scss'],
})
export class DetalleViajePage implements OnInit {
  viajeId: string;
  
  viajes: Viaje[]=[];

  constructor(private route: ActivatedRoute,
    private carreraService: FbCarreraService,
    private router: Router) { this.viajeId = this.route.snapshot.paramMap.get('id');
    this.obtenerDetalleViaje(this.viajeId);}

  ngOnInit() {
  }

  obtenerDetalleViaje(id:string) {
    this.carreraService.obtenerDoc('carrera/', id).subscribe((data: Viaje) => {
      this.viajes = [data]; 
      console.log(data);// Convierte el objeto en un array
    });
  }
  salir(){
    this.router.navigate(['/cmp2']);

  }

}
