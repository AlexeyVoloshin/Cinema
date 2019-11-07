import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import { ApiService } from './api.service';
import {Observable} from 'rxjs';
import {Place} from '../model/place';

@Injectable({
  providedIn: 'root'
})

export class PlaceService {
  private userUrl = environment.apiUrl;
  places: Place[];
  constructor(private _http: ApiService) {
  }

  getPlaces(): Observable<Place[]> {
    const url = `${this.userUrl}/places`;
    return this._http.get(url, this.places);
  }
}
