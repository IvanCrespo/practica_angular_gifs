import { Component, Input } from '@angular/core';

// Interface
import { Gif } from 'src/app/gifs/interfaces/gif.interfaces';

@Component({
  selector: 'gifs-card-list',
  templateUrl: './card-list.component.html',

})
export class CardListComponent {

  @Input() public gifs: Gif[] = [];
}