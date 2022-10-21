import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './pages/login/login.component';
import { OrderComponent } from './pages/order/order.component';
import { OrderCreateComponent } from './pages/order-create/order-create.component';
import { SlTableComponent } from './components/sl-table/sl-table.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, LoginComponent, OrderComponent, OrderCreateComponent, SlTableComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
