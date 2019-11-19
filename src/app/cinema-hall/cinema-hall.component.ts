import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Place } from '../model/place';
import { PlaceService } from '../services/place.service';
import { WebsocketService } from '../services/websocket.service';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-cinema-hall',
  templateUrl: './cinema-hall.component.html',
  styleUrls: ['./cinema-hall.component.css']
})

export class CinemaHallComponent implements OnInit {
  places: Place[];
  select: Place[];
  isShow: boolean = false;
  color = 'red';
  constructor(private placeService: PlaceService,
              private websocketService: WebsocketService) { }

  placeAndRow(): void {
    this.websocketService.getPlaces()
      .then((data) => {
      this.places = data;
      console.log('data', this.places);
      return this.places;
     });
  }

  ngOnInit() {
     // this.placeAndRow();
    this.websocketService.getPlaces()
      .then((data) => {
        this.places = data;
        console.log('data', this.places);
        return this.places;
      });
  }

 onClick(id) {
    // const id = event; // .target.innerText;

  //   console.log('place', place);
    for (let place of this.places) {
      if (place._id === id) {
        if (place.select) {
          break;
        } else {
          this.websocketService.updateSelected(id);
          this.select.push({
            _id : id,
            row : place.row,
            place : place.place,
            select : place.select,
            bought : place.bought,
          });
          this.placeAndRow();
        }
      }
    }

    this.isShow = true;
    this.color = 'grey';


    // for (let data of this.places) {
    //   if (data._id === id) {
    //    this.websocketService.saveSelected(data).subscribe( res => {
    //     this.select.push({
    //       _id : res._id,
    //       row: res.row,
    //       place : res.place,
    //       select : true,
    //       bought : res.bought,
    //     });
    //     this.places[data._id].select = true;
    //    // console.log('delete', this.places);
    //   });
  // }
 // }
  }

  delete(data: Place) {
     this.select = this.select.filter(p => p !== data);
     this.websocketService.updateSelected(data._id);
    // this.places[data._id].select = false;
     if (this.select.length === 0) {
       this.isShow = false;
     }
    // console.log('delete', this.select);
    // console.log('delete', this.places);
  }

  getStatus(_id: any) {
    for (let val of this.places) {
      if (val.select) {
        return 'selected';
      }
      for (let data of this.select) {
        if (data.select) {
          return 'currentselected';
        }
      }
    }
  }
}


