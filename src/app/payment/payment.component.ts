import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {Place} from '../model/place';
import {PlaceService} from '../services/place.service';
import {WebsocketService} from '../services/websocket.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  @Input() selectPlace: Place;
  constructor(private placeService: PlaceService, private websocketService: WebsocketService) { }

  ngOnInit() {
  }

  onSubmit(name: string, mail: string) {
      console.log(name + ` ${mail}` + ` you successfully paid tickets ${this.selectPlace[0].row} ${this.selectPlace[0].place}`);
      this.websocketService.boughtSelected(this.selectPlace);
      this.selectPlace = null;
      // this.websocketService.
    //  this.placeService.postMail(name, mail, this.selectPlace);
  }
}
