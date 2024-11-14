// src/app/services/donation.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DonationService {
  private donations: { item: string, condition: string }[] = [];

  addDonation(donation: { item: string, condition: string }) {
    this.donations.push(donation);
  }

  getDonations() {
    return this.donations;
  }
}
