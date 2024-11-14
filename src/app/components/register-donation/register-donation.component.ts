// src/app/components/register-donation/register-donation.component.ts
import { Component } from '@angular/core';
import { DonationService } from '../../services/donation.service';

@Component({
  selector: 'app-register-donation',
  templateUrl: './register-donation.component.html'
})
export class RegisterDonationComponent {
  donation = { item: '', condition: '' };

  constructor(private donationService: DonationService) {}

  registerDonation() {
    this.donationService.addDonation(this.donation);
    alert('Doação registrada com sucesso!');
  }
}
