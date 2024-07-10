import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { AccountComponent } from './account/account.component';



@NgModule({
  declarations: [
    DashboardComponent,
    ProductsComponent,
    AccountComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
