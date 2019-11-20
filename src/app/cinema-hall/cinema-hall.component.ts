import {Component, OnInit} from '@angular/core';
import { Place } from '../model/place';
import { WebsocketService } from '../services/websocket.service';

@Component({
  selector: 'app-cinema-hall',
  templateUrl: './cinema-hall.component.html',
  styleUrls: ['./cinema-hall.component.css']
})

export class CinemaHallComponent implements OnInit {
  places: Place[];
  select: Place[] = [];
  isShow: boolean = false;

  constructor(private websocketService: WebsocketService) { }

  placeAndRow(): void {
    this.websocketService.getPlaces()
      .then((data) => {
      this.places = data;
      console.log('data', data);
      return this.places;
     });
  }

  ngOnInit() {
    this.placeAndRow();

    this.websocketService.checkRes().subscribe(() => {
      this.placeAndRow();
    });
  }

 onClick(id) {
    const data: Place = {
      _id : id,
      select : true,
    };
    for (let place of this.places) {
      if (place._id === id) {
        if (place.select) {
          return;
        } else {
          this.websocketService.updateSelected(data);
          this.placeAndRow();
        }
        this.select.push({
            _id : id,
            row : place.row,
            place : place.place,
            select : true,
            bought : true,
          });
        this.isShow = true;
        return;
      }
    }
  }

  delete(data: Place) {
    const del = {
      _id : data._id,
      select : false,
    };
    this.select = this.select.filter(p => p._id !== data._id);
    this.websocketService.updateSelected(del);

     if (this.select.length === 0) {
       this.isShow = false;
     }
    this.placeAndRow();
  }

  getStatus(_id: any) {
      for (let val of this.select) {
      if (val._id === _id) {
        return 'currentsel';
        }
      }
    }
}


