import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PaymentComponent } from './payment/payment.component';
import { DefaultHomeComponent } from './homeComponents/default-home/default-home.component';
import { BangaloreHomeComponent } from './homeComponents/bangalore-home/bangalore-home.component';
import { ChennaiHomeComponent } from './homeComponents/chennai-home/chennai-home.component';
import { DelhiHomeComponent } from './homeComponents/delhi-home/delhi-home.component';
import { HyderbadHomeComponent } from './homeComponents/hyderbad-home/hyderbad-home.component';
import { MumbaiHomeComponent } from './homeComponents/mumbai-home/mumbai-home.component';



const routes: Routes = [
  {path : 'home',component:DefaultHomeComponent},
  {path : 'home/bangalore',component:BangaloreHomeComponent},
  {path : 'home/chennai',component:ChennaiHomeComponent},
  {path : 'home/delhi',component:DelhiHomeComponent},
  {path : 'home/hyderbad',component:HyderbadHomeComponent},
  {path : 'home/mumbai',component:MumbaiHomeComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
