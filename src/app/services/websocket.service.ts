import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import {Observable} from 'rxjs';
import * as io from 'socket.io-client';
import {Place} from '../model/place';
// import {createSocket} from 'dgram';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  constructor(private socket: Socket) { }

  updateSelected(data: Place) {
       this.socket.emit('update', data );
  }
  boughtSelected(data: Place) {
    this.socket.emit('bought', data );
  }
  getPlaces(): Promise<Place[]> {
    return new Promise<Place[]>((resolve => {
      this.socket.emit('get', 0, res => {
        resolve( res);
      });
    }));
  }

  checkRes() {
   return  this.socket.fromEvent('events');
  }
}
