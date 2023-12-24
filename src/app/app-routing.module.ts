import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuardService } from './shared/auth-guard.service';
import { ProductsComponent } from './pages/products/products.component';
import { ProductComponent } from './pages/product/product.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { CategoryPageComponent } from './pages/category-page/category-page.component';
import { CartComponent } from './pages/cart/cart.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [AuthGuardService] },
  { path: 'login', component: LoginComponent },
  {
    path: 'products',
    component: ProductsComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'search-page',
    component: SearchPageComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'category-page',
    component: CategoryPageComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'cart',
    component: CartComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'product',
    component: ProductComponent,
    canActivate: [AuthGuardService],
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' }, //faz com que se inicie direto na página home
];
//canActivate:[] : Realiza a permição para a ativação da rota

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
