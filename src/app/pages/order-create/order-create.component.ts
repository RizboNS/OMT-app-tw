import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-create',
  templateUrl: './order-create.component.html',
  styleUrls: ['./order-create.component.css'],
})
export class OrderCreateComponent implements OnInit {
  tabs: string[] = ['All', 'Customer', 'Cart'];
  selectedTab: string = this.tabs[0];
  products = [{}];
  constructor() {}

  ngOnInit(): void {}
  selectTab(tab: string) {
    this.selectedTab = tab;
  }
}
