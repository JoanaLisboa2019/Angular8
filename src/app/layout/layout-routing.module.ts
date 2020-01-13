import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShelvesComponent } from './shelves/shelves.component';
import { ProductsComponent } from './products/products.component';
import { MainComponent } from './main/main.component';
import { LayoutComponent } from './layout.component';


const routes: Routes = [
{
path: '',
component: LayoutComponent,
children: [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'shelves',
    component: ShelvesComponent
  }
]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
