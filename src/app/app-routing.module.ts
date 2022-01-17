import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { UserAccountPageComponent } from './pages/user-account-page/user-account-page.component';

const routes: Routes = [
  { path: 'products', loadChildren: () => import('./modules/product/product.module').then(m => m.ProductModule) },
  { path: 'product/:id', component: ProductDetailsComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'account', component: UserAccountPageComponent },
  { path: 'home', component: HomePageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotFoundPageComponent },  // Wildcard route for a 404 page

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
