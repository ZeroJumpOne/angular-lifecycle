import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { FrmProductComponent } from './pages/frm-product/frm-product.component';
import { PriceComponent } from './components/price/price.component';


@NgModule({
  declarations: [
    FrmProductComponent,
    PriceComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
