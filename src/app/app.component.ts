import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PlayingCardComponent } from './components/playing-card/playing-card.component';
import { Monster } from './models/monster.model';
import { SearchBarComponent } from './components/search-bar/search-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PlayingCardComponent, SearchBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {

  monster1: Monster;
  count: number = 0;
  search: string = "";

  constructor() {
    this.monster1 = new Monster();
    this.monster1.name = 'Pik';
    this.monster1.figureCaption = 'N°002 Piuk';
    this.monster1.hp = 90;
  }

  increaseCount() {
    this.count++;
  }
}
