import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent implements OnInit {
  tabs: string[] = ['All', 'Status', 'Customer', 'Product', 'Ship from'];
  selectedTab: string = this.tabs[0];
  constructor() {}

  ngOnInit(): void {}
  selectTab(tab: string) {
    this.selectedTab = tab;
  }
}
