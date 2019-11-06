import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Place } from '../model/place';

@Component({
  selector: 'app-cinema-hall',
  templateUrl: './cinema-hall.component.html',
  styleUrls: ['./cinema-hall.component.css']
})

export class CinemaHallComponent implements OnInit {
  places: Place[] = [];
  select: Array<Place> = [];
  calc: number = 0;
  selUser;
  name = 'Alex';
  // @Output() selectPlace: EventEmitter<Place>;
  constructor() { }
  placeAndRow() {
    for ( let r = 1; r < 11; r++) {
      for ( let p = 1; p < 11; p++) {
        this.places.push({
          _id : this.calc ++,
          row : r,
          place : p,
        });
      }
    }
    console.log('place', this.places);
  }
  ngOnInit() {
    this.placeAndRow();
  }
  onClick(event) {
    const id = +event.target.innerText;
    console.log('id', id);
    for (let data of this.places) {
      if (data._id === id) {
        this.select.push({
          _id : data._id,
          row: data.row,
          place : data.place
        });
      }
    }
  }

  delete(data: Place) {
    this.select = this.select.filter(p => p !== data);
    console.log('delete', this.select);
  }
}


