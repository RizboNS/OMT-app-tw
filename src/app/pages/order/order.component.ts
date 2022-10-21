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
  constructor() {}

  ngOnInit(): void {}
  selectTab(tab: string) {
    this.selectedTab = tab;
  }
}
