import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  
  public cards:Array<any> = [];

  ngOnInit(): void {
      this.cards = [
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
      ]
  }
}
