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
  selectedLocation(valueEmitted: locationModel) {
    if (
      !this.selectedLocations.includes(valueEmitted) &&
      valueEmitted !== undefined
    ) {
      this.selectedLocations.push(valueEmitted);
    }
  }

  removeSelectedLocation(i: number) {
    this.selectedLocations.splice(i, 1);
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
  distance?: number;
  quantity: number;
}
