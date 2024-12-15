import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {


  @Input() search = "";

  @Output() searchButtonClicked = new EventEmitter();
  @Output() searchChange = new EventEmitter<string>();
  
  
  searchClick() {
    this.searchButtonClicked.emit();
  }

  updateSearch(value: string) {
    console.log(value);
    this.searchChange.emit(value);
    }

}
