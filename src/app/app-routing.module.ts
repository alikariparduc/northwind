import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './components/category/category.component';
import { ProductComponent } from './components/product/product.component';

const routes: Routes = [
  {path:"",pathMatch:"full",component:ProductComponent},//Anasayfayı ProductComponet ayarlıyoruz.
  {path:"products",component:ProductComponent},// /'den sonra products gelirse yine productcomponent getir.
  {path:"products/category/:categoryId",component:ProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
