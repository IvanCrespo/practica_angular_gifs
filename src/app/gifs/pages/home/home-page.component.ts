import { Component } from '@angular/core';

// Interfaces
import { Gif } from '../../interfaces/gif.interfaces';

// Services
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  constructor(
    private gifsService: GifsService
  ) {}

  get gifs(): Gif[] {
    return this.gifsService.gifList;
  }
}
