import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CategoryProductsComponent } from './category-products/category-products.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { homepageGuard } from './auth/homepage.guard';

const routes: Routes = [
  {
    path:'',
    component : HomeComponent
  },
  {
    path:'register',
    component : RegisterComponent
  },
  {
    path:'login',
    component :LoginComponent
  },
  {
    path: 'cat-products/:id/:name',
    component : CategoryProductsComponent
  },
  {
    path:'product-info/:product_id',
    component: ProductInfoComponent,
    canActivate:[homepageGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
