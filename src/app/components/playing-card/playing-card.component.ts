import { Component, Input } from '@angular/core';
import { Monster } from '../../models/monster.model';

@Component({
  selector: 'app-playing-card',
  standalone: true,
  imports: [],
  templateUrl: './playing-card.component.html',
  styleUrl: './playing-card.component.css',
})
export class PlayingCardComponent {
  @Input(
    // { required: true }
    // { alias: "my-monster"}
    { transform : (value: Monster) => {
      value.hp = value.hp / 2;
      return value;
    }}
  ) monster: Monster = new Monster();
  // @Input() name: string = 'My Monster';
  // @Input() hp: number = 40;
  // @Input() figureCaption: string = 'N°001 Monster';
  // @Input() attackName: string = 'Geo Impact';
  // @Input() attackStrength: number = 60;
  // @Input() description: string = "This is a long description of a monster capacity. \
  //               Probably something to do with electricity."
}
