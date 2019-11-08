import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import {Observable} from 'rxjs';
import * as io from 'socket.io-client';

@Injectable()
export class WebsocketService {
  socket: any;
  readonly uri: string = 'http://localhost:3000';
  constructor() {
    this.socket = io(this.uri);
  }
  listen(eventName: string) {
    return new Observable((subscriber => {
      this.socket.on(eventName, (data) => {
        subscriber.next(data);
      });
    }));
  }

  emit(eventName: string, data: any) {
    this.socket.emit(eventName, data);
  }
}
