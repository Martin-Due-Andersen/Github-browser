import { Component, OnChanges, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'gh-stars',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
  @Input() rating: number;
  starWidth: number;
  @Output() ratingClicked: EventEmitter<string> =
    new EventEmitter<string>();

  ngOnChanges(): void {
    console.log('NgChanges occurred');
    this.starWidth = this.rating * 86 / 5;
  }

  onClick(): void {
  // console.log(`rating: ${this.rating} was clicked`);

  this.ratingClicked.emit(`rating: ${this.rating} was clicked`);
  }

}