import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CinemaHallComponent } from './cinema-hall/cinema-hall.component';
import { PaymentComponent } from './payment/payment.component';

// import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

// const config: SocketIoConfig = { url: 'http://localhost:3000', options: {}};

@NgModule({
  declarations: [
    AppComponent,
    CinemaHallComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   // SocketIoModule.forRoot(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
