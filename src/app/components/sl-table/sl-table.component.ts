import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { locationModel } from 'src/app/pages/order/order.component';

@Component({
  selector: 'app-sl-table',
  templateUrl: './sl-table.component.html',
  styleUrls: ['./sl-table.component.css'],
})
export class SlTableComponent implements OnInit {
  selectedRowIndex = -1;
  selectedLocation: locationModel[] = [];
  @Output() selectedLocationEmiter = new EventEmitter<locationModel[]>();
  stockingLocations = [
    {
      id: '5325252253',
      address: 'George Street 10',
      city: 'New York',
      state: 'NY',
      zip: '1000',
      product: '593208295052',
      qty: '1',
    },
    {
      id: '5325252253',
      address: 'Liberty Street 1',
      city: 'Wyioming',
      state: 'WY',
      zip: '21000',
      product: '593208295052',
      qty: '2',
    },
    {
      id: '5325252253',
      address: 'Liberty Street 1',
      city: 'Wyioming',
      state: 'WY',
      zip: '21000',
      product: '593208295052',
      qty: '2',
    },
    {
      id: '5325252253',
      address: 'Liberty Street 1',
      city: 'Wyioming',
      state: 'WY',
      zip: '21000',
      product: '593208295052',
      qty: '2',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
  selectedRow(i: number) {
    this.selectedRowIndex = i;
  }
  appendSelectedLocation() {
    if (
      !this.selectedLocation.includes(
        this.stockingLocations[this.selectedRowIndex]
      )
    ) {
      this.selectedLocation.push(this.stockingLocations[this.selectedRowIndex]);
      this.selectedLocationEmiter.emit(this.selectedLocation);
    }
  }
}
