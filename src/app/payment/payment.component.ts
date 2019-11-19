import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {Place} from '../model/place';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  @Input() selectPlace: Place[];
  constructor() { }

  ngOnInit() {
  }

  addSelected(event) {
    console.log('selectPlace', this.selectPlace);


  }

  onSubmit(value: string, value2: string) {

  }
}
