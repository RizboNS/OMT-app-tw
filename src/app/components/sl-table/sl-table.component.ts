import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { locationModel } from 'src/app/pages/order/order.component';

@Component({
  selector: 'app-sl-table',
  templateUrl: './sl-table.component.html',
  styleUrls: ['./sl-table.component.css'],
})
export class SlTableComponent implements OnInit {
  selectedRowIndex = -1;
  sortedBy = '';
  selectedLocation: locationModel | undefined;
  @Output() selectedLocationEmiter = new EventEmitter<locationModel>();
  stockingLocations = [
    {
      id: '5325252251',
      address: 'George Street 10',
      city: 'New York',
      state: 'NY',
      zip: '1000',
      product: '593208295052',
      quantity: 1,
      distance: 23,
    },
    {
      id: '5325252250',
      address: 'Liberty Street 1',
      city: 'Wyioming',
      state: 'WY',
      zip: '21000',
      product: '593208295052',
      quantity: 2,
      distance: 50,
    },
    {
      id: '5325252254',
      address: 'Liberty Street 1',
      city: 'Wyioming',
      state: 'WY',
      zip: '21000',
      product: '593208295052',
      quantity: 2,
      distance: 130,
    },
    {
      id: '5325252256',
      address: 'Liberty Street 1',
      city: 'Wyioming',
      state: 'WY',
      zip: '21000',
      product: '593208295052',
      quantity: 2,
      distance: 140,
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  appendSelectedLocation(i: number) {
    this.selectedLocation = this.stockingLocations[i];
    this.selectedLocationEmiter.emit(this.selectedLocation);
  }

  sort(field: string) {
    if (this.sortedBy === field + 'ASC') {
      this.stockingLocations.sort((a, b) =>
        a[field as keyof locationModel] < b[field as keyof locationModel]
          ? 1
          : b[field as keyof locationModel] < a[field as keyof locationModel]
          ? -1
          : 0
      );
      this.sortedBy = field + 'DESC';
    } else {
      this.stockingLocations.sort((a, b) =>
        a[field as keyof locationModel] > b[field as keyof locationModel]
          ? 1
          : b[field as keyof locationModel] > a[field as keyof locationModel]
          ? -1
          : 0
      );
      this.sortedBy = field + 'ASC';
    }
  }
}
