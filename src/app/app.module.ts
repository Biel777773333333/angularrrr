// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  // 1. Importe o FormsModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterDonationComponent } from './components/register-donation/register-donation.component';
import { CollectionPointsComponent } from './components/collection-points/collection-points.component';
import { DonationService } from './services/donation.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterDonationComponent,
    CollectionPointsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule  // 2. Adicione o FormsModule aqui
  ],
  providers: [DonationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
