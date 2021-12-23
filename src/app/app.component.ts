import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'PracticasAngular';
  public cards:Array<any> = [];
  ngOnInit(): void {
      this.cards = [
        {
          title:'Video 1',
          subtitulos: 'Subtitulo 1',
          img: 'http://picsum.photos/536/354'
        },
        {
          title:'Video 2',
          subtitulos: 'Subtitulo 2',
          img: 'http://picsum.photos/536/354'
        },
        {
          title:'Video 3',
          subtitulos: 'Subtitulo 3',
          img: 'http://picsum.photos/536/354'
        }
      ]
  }
}
