import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import {Observable} from 'rxjs';
import * as io from 'socket.io-client';
import {Place} from '../model/place';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  // socket: any;
  // readonly uri: string = 'ws://localhost:3000';
  // constructor() {
  //   this.socket = io(this.uri);
  // }
  // listen(eventName: string) {
  //   return new Observable((subscriber => {
  //     this.socket.on(eventName, (data) => {
  //       subscriber.next(data);
  //     });
  //   }));
  // }
  //
  // emit(eventName: string, data: any) {
  //   this.socket.emit(eventName, data);
  // }
  constructor(private socket: Socket) { }
  saveSelected(id: string) {
       this.socket.emit('save', id, res => {
        console.log(res);
      });
  }

 getPlaces(): Promise<Place[]> {
    return new Promise<Place[]>((resolve => {
      this.socket.emit('get', 0, res => {
        console.log(res);
        resolve( res);
      });
    }));

  }






  checkConnect()  {
    this.socket.on('connect', () => {
      console.log('Connected');
      this.socket.emit('events', { test: 'test'});
      this.socket.emit('identity', 0, response =>
        console.log('Identity:', response),
      );
    });

    this.socket.on('events', (data) => {
      console.log('event', data);
    });
    this.socket.on('exception', (data) => {
      console.log('event', data);
    });
    this.socket.on('disconnect', () => {
      console.log('Disconnected');
    });
    return;
  }
}
