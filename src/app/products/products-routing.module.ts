import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrmProductComponent } from './pages/frm-product/frm-product.component';

const routes: Routes = [
   {
      path: '',
      children: [
         { path: 'product', component: FrmProductComponent },
         { path: '**',      redirectTo: 'product' }
      ]
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
