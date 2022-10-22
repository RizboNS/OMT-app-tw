import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './pages/login/login.component';
import { OrderComponent } from './pages/order/order.component';
import { OrderCreateComponent } from './pages/order-create/order-create.component';
import { SlTableComponent } from './components/sl-table/sl-table.component';
import { CreateProductComponent } from './pages/create-product/create-product.component';
import { EditProductComponent } from './pages/edit-product/edit-product.component';
import { OrderTableComponent } from './components/order-table/order-table.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, LoginComponent, OrderComponent, OrderCreateComponent, SlTableComponent, CreateProductComponent, EditProductComponent, OrderTableComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
