import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { OrderCreateComponent } from './pages/order-create/order-create.component';
import { OrderComponent } from './pages/order/order.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'order/:id', component: OrderComponent },
  { path: 'order-create', component: OrderCreateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
