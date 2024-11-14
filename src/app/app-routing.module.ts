// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegisterDonationComponent } from './components/register-donation/register-donation.component';
import { CollectionPointsComponent } from './components/collection-points/collection-points.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register-donation', component: RegisterDonationComponent },
  { path: 'collection-points', component: CollectionPointsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
