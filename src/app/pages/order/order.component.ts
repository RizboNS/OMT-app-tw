import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent implements OnInit {
  tabs: string[] = ['All', 'Status', 'Customer', 'Cart', 'Ship from'];
  selectedTab: string = this.tabs[0];
  products = [{}];
  selectedLocations: locationModel[] = [];
  constructor() {}

  ngOnInit(): void {}
  selectTab(tab: string) {
    this.selectedTab = tab;
  }
  selectedLocation(valueEmitted: locationModel[]) {
    valueEmitted.forEach((location) => {
      if (
        !this.selectedLocations.includes(location) &&
        location !== undefined
      ) {
        this.selectedLocations.push(location);
      }
    });
  }
  removeSelectedLocation() {
    // TO DO
    // Dont forget to manage child array when removed
    // Maybe refractor child to send single location instead of whole array.
  }
}
// TO DO ! OFFLOAD
export interface locationModel {
  id: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  product: string;
  qty: string;
  distance?: string;
}
