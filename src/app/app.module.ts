import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PaymentComponent } from './payment/payment.component';
import { DefaultHomeComponent } from './homeComponents/default-home/default-home.component';
import { BangaloreHomeComponent } from './homeComponents/bangalore-home/bangalore-home.component';
import { ChennaiHomeComponent } from './homeComponents/chennai-home/chennai-home.component';
import { DelhiHomeComponent } from './homeComponents/delhi-home/delhi-home.component';
import { HyderbadHomeComponent } from './homeComponents/hyderbad-home/hyderbad-home.component';
import { MumbaiHomeComponent } from './homeComponents/mumbai-home/mumbai-home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PaymentComponent,
    DefaultHomeComponent,
    BangaloreHomeComponent,
    ChennaiHomeComponent,
    DelhiHomeComponent,
    HyderbadHomeComponent,
    MumbaiHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
