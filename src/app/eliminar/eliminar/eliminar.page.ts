import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Carrera } from 'src/app/interfaces/carrera';
import { CarreraService } from 'src/app/services/carrera/carrera.service';


@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.page.html',
  styleUrls: ['./eliminar.page.scss'],
})
export class EliminarPage implements OnInit {

  parametroId: Carrera
  data :any = []
  constructor(
    private router: Router,
    private rutaActiva: ActivatedRoute,) { }

  ngOnInit() {

    this.rutaActiva.params.subscribe(parametro => {
      console.log("parametro",parametro);
      this.parametroId = parametro['idCarrera'];
    });
    //  this.carServicio.getCarrera(Number(this.parametroId))?.

   
  }

  eliminar(){

    
    this.router.navigate(['/tabs/listar']);
    localStorage.setItem('AptoConducir','si')
    localStorage.setItem('AptoViajar','si')
  }

}
