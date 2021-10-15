import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SiteHeaderComponent } from './SharedComponents/site-header/site-header.component';
import { SiteFooterComponent } from './SharedComponents/site-footer/site-footer.component';
import { IndexComponent } from './Pages/index/index.component';
import { SliderComponent } from './Pages/index/slider/slider.component';
import { SpecialProductComponent } from './Pages/index/special-product/special-product.component';
import { NewProductComponent } from './Pages/index/new-product/new-product.component';
import { FavoritesProductComponent } from './Pages/index/favorites-product/favorites-product.component';
import { LatestNewsComponent } from './Pages/index/latest-news/latest-news.component';
import { BrandsComponent } from './Pages/index/brands/brands.component';
import {SliderService} from "./services/slider.service";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import {AppRoutingModule} from "./app-routing.module";
import {EshopInterceptor} from "./Utilities/EshopInterceptor";

@NgModule({
  declarations: [
    AppComponent,
    SiteHeaderComponent,
    SiteFooterComponent,
    IndexComponent,
    SliderComponent,
    SpecialProductComponent,
    NewProductComponent,
    FavoritesProductComponent,
    LatestNewsComponent,
    BrandsComponent,
    AboutUsComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [SliderService,{
    provide:HTTP_INTERCEPTORS,
    useClass:EshopInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
