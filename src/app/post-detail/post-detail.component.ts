import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  public cards:Array<any> = [
    {
      id: 0,
      title:'Video 1',
      subtitulos: 'Subtitulo 1',
      img: 'http://picsum.photos/536/354'
    },
    {
      id: 1,
      title:'Video 2',
      subtitulos: 'Subtitulo 2',
      img: 'http://picsum.photos/536/354'
    },
    {
      id: 2,
      title:'Video 3',
      subtitulos: 'Subtitulo 3',
      img: 'http://picsum.photos/536/354'
    }
  ];

  constructor(private route:ActivatedRoute) { }
  public respuesta:any;
  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap:any) =>{
      const {params} = paramMap;     
      console.log(params);
      
      this.cargarData(params.variable)
      
    })
  }

  cargarData(id:number){
    this.respuesta = this.cards[id];
    console.log(this.respuesta);
  }

}
