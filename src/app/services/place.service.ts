import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import { ApiService } from './api.service';
import {Observable} from 'rxjs';
import {Place} from '../model/place';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})

export class PlaceService {
  private userUrl = environment.apiUrl;
  places: Place[];
  constructor(private _http: ApiService, private socket: Socket) {
  }
  getPlaces(): Observable<Place[]> {
    const url = `${this.userUrl}/places`;
    return  this._http.get(url);
  }
  getPlace(id: string): Observable<Place[]> {
    const url = `${this.userUrl}/places/${id}`;
    return  this._http.get(url);
  }
  postMail(name: string, mail: string, data) {
    const url = `${this.userUrl}/`;
    console.log('data', name, mail, data);
    this._http.post(url, {name, mail, data});
  }
}
