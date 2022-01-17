import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { FormsModule } from '@angular/forms';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { UserAccountPageComponent } from './pages/user-account-page/user-account-page.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { CustomFontStyleDirective } from './directives/custom-font-style.directive';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import {  HttpClientModule } from '@angular/common/http';
import { ElementCountPipe } from './pipes/element-count.pipe';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    TopBarComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundPageComponent,
    LoginPageComponent,
    UserAccountPageComponent,
    ProductCardComponent,
    CustomFontStyleDirective,
    ProductDetailsComponent,
    ElementCountPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
