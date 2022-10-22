import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProductComponent } from './pages/create-product/create-product.component';
import { EditProductComponent } from './pages/edit-product/edit-product.component';
import { LoginComponent } from './pages/login/login.component';
import { OrderCreateComponent } from './pages/order-create/order-create.component';
import { OrderComponent } from './pages/order/order.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'orders', component: OrderComponent },
  { path: 'find-order', component: OrderComponent },
  { path: 'order-create', component: OrderCreateComponent },
  { path: 'create-product', component: CreateProductComponent },
  { path: 'find-product', component: EditProductComponent },
  { path: 'products', component: EditProductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
