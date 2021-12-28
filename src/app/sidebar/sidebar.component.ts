import { Component, OnInit } from '@angular/core';
import { ServicioDeFavoritosService } from '../servicio-de-favoritos.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private servicioFavorito: ServicioDeFavoritosService) { }
  public listdeVideos:Array<any> = [];
  ngOnInit(): void {
    //este va a recibir
    this.servicioFavorito.disparadorDeFavoritos.subscribe(data =>{
      console.log('recibiendo data',data);
      this.listdeVideos.push(data);
    })
  }

}
