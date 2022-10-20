import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { OrderComponent } from './pages/order/order.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'order/:id', component: OrderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
