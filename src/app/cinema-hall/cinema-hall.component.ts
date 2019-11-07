import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Place } from '../model/place';

@Component({
  selector: 'app-cinema-hall',
  templateUrl: './cinema-hall.component.html',
  styleUrls: ['./cinema-hall.component.css']
})

export class CinemaHallComponent implements OnInit {
  places: Place[] = [];
  select: Place[] = [];
  isShow: boolean = false;
  calc: number = 0;
  color = 'red';
  constructor() { }
  placeAndRow() {
    for ( let r = 1; r < 11; r++) {
      for ( let p = 1; p < 11; p++) {
        this.places.push({
          _id : this.calc ++,
          row : r,
          place : p,
          select : false,
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
    if (this.places[id].select) {
      return;
    }


    this.isShow = true;
    this.color = 'grey';
    console.log('id', id);

    for (let data of this.places) {
      if (data._id === id) {
        this.select.push({
          _id : data._id,
          row: data.row,
          place : data.place,
          select : true,
        });
        this.places[data._id].select = true;
        console.log('delete', this.places);
      }
    }
  }

  delete(data: Place) {
    this.select = this.select.filter(p => p !== data);
    this.places[data._id].select = false;
    if (this.select.length === 0) {
      this.isShow = false;
    }
    console.log('delete', this.select);
    console.log('delete', this.places);
  }

  getStatus(_id: any) {
    if (this.places[_id].select) {
      return 'selected';
    } else if (!this.places[_id].select) {
      return 'unselected';
    }
  }
}


